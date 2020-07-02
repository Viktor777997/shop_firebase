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
            const { available, categoryId, title, price, text, slideItem } = this.props.data
            this.state = {
                available,
                categoryId,
                title,
                slideItem,
                price,
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
                price: '',
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

        // const { categoryId, title, price, text, image } = this.state

        // if (category === '' || title === '' || price === '' || text === '' || image === '') {
        //     return alert('add ')
        // }
        if (this.props.data) {
            this.props.edit(this.props.id, this.state)

            alert('item edited')
        }
        else {
            this.props.create(this.state)
            alert('item created')
        }

    }

    render() {
        const { data, categories } = this.props;
        const { title, price, text, image } = this.state

        return (
            <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>available</label>
                    <select className="form-control form-control" id="exampleFormControlSelect3" name='available'
                        onChange={this.onHandleChnage} value={this.state.available}>
                        <option>true</option>
                        <option>false</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>Slide Item</label>
                    <select className="form-control form-control" id="exampleFormControlSelect4" name='slideItem'
                        onChange={this.onHandleChnage} value={this.state.slideItem}>
                        <option>false</option>
                        <option>true</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='category'>category</label>
                    <select className="form-control form-control" id="exampleFormControlSelect5" name='categoryId'
                        onChange={this.onHandleChnage} value={this.state.categoryId}>
                        {
                            categories.data.map(item => (
                                item.categoryMother !== "" ? <option key={item.id} value={item.id}> {item.title} </option> : null
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword3">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title" name='title' onChange={this.onHandleChnage} value={title} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword4">Price</label>
                    <input type="number" className='form-control' id="formGroupExampleInput" placeholder="Price" name='price' onChange={this.onHandleChnage} value={price} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">About item</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='text' onChange={this.onHandleChnage} value={text} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">item fhoto</label>
                    <img height='100px' width='100px' className="choosedPhoto mb-3 ml-3" alt='img' src={data ? data.image : null} value={image} />
                    <input type="file" className="form-control-file imgInput" id="exampleFormControlFile1" name='image' onChange={this.onHandleChnage} />
                </div>
                <button type="submit" className="btn btn-dark col-2">{data ? "Edit Item" : 'Create Item'}</button>
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
