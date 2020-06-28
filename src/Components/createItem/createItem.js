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
            const { available, categoryId, title, price, text } = this.props.data
            this.state = {
                available,
                categoryId,
                title,
                price,
                text,
                image: null,
            }
        }
        else {
            this.state = {
                available: 'true',
                categoryId: '',
                title: '',
                price: '',
                text: '',
                image: '',
            }
        }
    }

    componentDidMount() {
        this.props.getCategories([['categoryMother', '==', ''], ['available', '==', 'true']])
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                console.log(reader.onload)
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
            [name]: [value],
        });

        // switch (e.target.name) {
        //     case 'available':
        //         return this.setState({
        //             available: e.target.value,
        //         })
        //     case 'category':
        //         return this.setState({
        //             categoryId: e.target.value,
        //         })
        //     case 'title':

        //     case 'price':
        //         return this.setState({
        //             price: e.target.value,
        //         })
        //     case 'text':
        //         return this.setState({
        //             text: e.target.value,
        //         })
        //     case 'image':
        //         return this.setState({
        //             image: e.target.files[0],
        //         })
        //     default:
        //         break;
        // }
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

        const { categoryId, title, price, text, image } = this.state

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
        const { categoryId, title, price, text, image } = this.state

        console.log(categories)
        return (
            <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>available</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='available'
                        onChange={this.onHandleChnage} value={this.state.available}>
                        <option>true</option>
                        <option>false</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='category'>category</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='category'
                        onChange={this.onHandleChnage}>
                        {
                            categories.data.map(item => (
                                <option key={item.id} value={item.id}>
                                    {
                                        item.title
                                    }
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title" name='title' onChange={this.onHandleChnage} value={title} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
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
    // console.log(state)
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
