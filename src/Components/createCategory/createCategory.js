import React, { Component } from 'react';

class CreateCategory extends Component {

    constructor(props) {
        super(props)
        if (this.props.data) {
            this.state = {
                available: this.props.data.available,
                title: this.props.data.title,
                categoryMother: this.props.data.categoryMother,
            }
        }
        else {
            this.state = {
                available: 'true',
                title: '',
                categoryMother: '',
            }
        }

    }


    onChange = (e) => {

        console.log(e.target.value, e.target)

        return this.setState({
            [e.target.name]: e.target.value,
        })


        // switch (e.target.name) {
        //     case 'available':
        //         return this.setState({
        //             available: e.target.value,
        //         })
        //     case 'categoryMother':
        //         return this.setState({
        //             categoryMother: e.target.value,
        //         })
        //     case 'title':
        //         return this.setState({
        //             title: e.target.value,
        //         })
        //     default:
        //         break;

        // }
    }
    onSubmit = (e) => {
        if (this.props.data) {
            this.props.edit(this.props.id, this.state)
            alert('category edited')

        }
        else {
            this.props.createCategory(this.state)
            alert('category created')
            setTimeout(() => window.location.reload(), 1000)
        }
        e.preventDefault();
    }

    render() {
        const { data, categories } = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>available</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='available'
                        onChange={this.onChange} value={this.state.available}>
                        <option>true</option>
                        <option>false</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>category mother</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='categoryMother'
                        onChange={this.onChange} value={this.state.categoryMother}>
                        <option value="">Create as category</option>
                        {
                            categories.map(item => (
                                <option key={item.id} value={item.id} >{item.title}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">New Category</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Category Name" name='title'
                        onChange={this.onChange} value={this.state.title} />
                </div>

                <button type="submit" className="btn btn-dark">{data ? "Edit Category" : 'Create Category'}</button>
            </form>
        );
    }
}

export default CreateCategory;