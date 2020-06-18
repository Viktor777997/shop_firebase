import React, { Component } from 'react';


class CreateItem extends Component {

    state = {
        available: null,
        title: null,
        price: null,
        text: null,
        image: null,
    }
 

    onHandleChnage = (e) => {
        console.log(e.target.value)
        switch (e.target.name) {
            case 'available':
                return this.setState({
                    available: e.target.value,
                })
            case 'title':
                return this.setState({
                    title: e.target.value,
                })
            case 'price':
                return this.setState({
                    price: e.target.value,
                })
            case 'text':
                return this.setState({
                    text: e.target.value,
                })
            case 'image':
                return this.setState({
                    image: `ascascasc${e.target.value}`,
                })

        }


    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        // if (this.state.available === null || this.state.title === null || this.state.price === null || this.state.text === null || this.state.image === null) {
        //     console.log('test')
        //     return alert('ascasc')
        // }
        this.props.create(this.state)
        // alert('item created')
    }

    render() {
        const { data } = this.props
        return (
            <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>available</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='available' onChange={this.onHandleChnage}>

                        <option>{data !== undefined ? data.available : 'Select'}</option>
                        <option>true</option>
                        <option>false</option>

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title" name='title' onChange={this.onHandleChnage} defaultValue={data !== undefined ? data.title : null} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Price" name='price' onChange={this.onHandleChnage} defaultValue={data !== undefined ? data.price : null} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">About item</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='text' onChange={this.onHandleChnage} defaultValue={data !== undefined ? data.text : null} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">item fhoto</label>
                    {/* <img height='100px' width='100px' className="choosedPhoto mb-3 ml-3" onChange={this.onHandleChnage}></img> */}
                    <input type="file" className="form-control-file imgInput" id="exampleFormControlFile1" name='image' onChange={this.onHandleChnage}></input>
                </div>
                <button type="submit" className="btn btn-dark col-2">Create Item</button>
            </form>
        );
    }
}

export default CreateItem;