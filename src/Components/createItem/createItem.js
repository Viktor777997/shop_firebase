import React, { Component } from 'react';
import $ from 'jquery'

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchCategories } from '../../store/actions/category';


class CreateItem extends Component {

    constructor(props) {
        super(props)
        if (this.props.data) {
            const { available, categoryId, title, bigPrice, smallPrice, text, slideItem } = this.props.data
            this.state = {
                available,
                categoryId,
                title,
                slideItem,
                bigPrice,
                smallPrice,
                text,
                image: '',
            }
        }
        else {
            this.state = {
                available: 'true',
                slideItem: 'false',
                categoryId: '',
                title: '',
                bigPrice: '',
                smallPrice: '',
                text: '',
                image: '',
            }
        }
    }

    componentDidMount() {
        this.props.getCategories([['available', '==', 'true']])
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.choosedPhoto').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]); // convert to base64 string
            }
        }
        $(".form-control-file").change(function () {
            readURL(this);
        });

    }

    onHandleChnage = (e) => {
        const name = e.target.name;

        const value = ((target) => {
            switch (target.name) {
                case "image":
                    return target.files[0];
                default:
                    return target.value;
            }
        })(e.target);

        return this.setState({
            [name]: value,
        });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();

        const { categoryId, title, bigPrice, smallPrice, text, image } = this.state


        if (this.props.data) {
            if (categoryId === '' || title === '' || bigPrice === '' || smallPrice === '' || text === '') {
                return alert('Есть пустые строки')
            }
            this.props.edit(this.props.id, this.state)
            return alert('Карточка редактирована')
        }
        if (categoryId === '' || title === '' || bigPrice === '' || smallPrice === '' || text === '' || image === '') {
            return alert('Есть пустые строки')
        }
        this.props.create(this.state)
        return alert('Карточка создана')


    }

    render() {
        const { data, categories } = this.props;
        const { title, bigPrice, smallPrice, text, image } = this.state

        return (
            <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>Активный</label>
                    <select className="form-control form-control" id="exampleFormControlSelect3" name='available'
                        onChange={this.onHandleChnage} value={this.state.available}>
                        <option value="true">Да</option>
                        <option value='false'>Нет</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='SlideItem'>Карточка слайда</label>
                    <select className="form-control form-control" id="exampleFormControlSelect4" name='slideItem'
                        onChange={this.onHandleChnage} value={this.state.slideItem}>
                        <option value='false'>Нет</option>
                        <option value="true">Да</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='category'>Категория</label>
                    <select className="form-control form-control" id="exampleFormControlSelect5" name='categoryId'
                        onChange={this.onHandleChnage} value={this.state.categoryId}>
                        <option value=''>Выберите категорию</option>
                        {
                            categories.data.map(item => (
                                item.categoryMother !== "" ? <option key={item.id} value={item.id}> {item.title} </option> : null
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword3">Название</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Название" name='title' onChange={this.onHandleChnage} value={title} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword4">Оптовая цена</label>
                    <input type="number" className='form-control' id="formGroupExampleInput" placeholder="Оптовая цена" name='bigPrice' onChange={this.onHandleChnage} value={bigPrice} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword121"> Цена</label>
                    <input type="number" className='form-control' id="formGroupExampleInput" placeholder="Цена" name='smallPrice' onChange={this.onHandleChnage} value={smallPrice} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea15">О товаре</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='text' placeholder='О товаре' onChange={this.onHandleChnage} value={text} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Фото товара</label>
                    <img height='100px' width='100px' className="choosedPhoto mb-3 ml-3" alt='Фото' src={data ? data.image : null} value={image} />
                    <input type="file" className="form-control-file imgInput" id="exampleFormControlFile1" name='image' onChange={this.onHandleChnage} />
                </div>
                <button type="submit" className="btn btn-dark col-2">{data ? "Редактировать карточку" : 'Создать карточку'}</button>
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {
        categories: state.category.list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: query => dispatch(fetchCategories(query)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(CreateItem);
