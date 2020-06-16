import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem, createItem } from '../../store/actions/item';

class ItemCreatePage extends Component {
   
    state = {
        available: true,
        title: 'aasvvs',
        price: 555,
        text: 'ascascascascmoasokcmoakmsc',
    }

    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.createItem(this.state)
    }
    render() {
        const { item } = this.props;
        if (this.props.match.params.id) {


            if (!item.isLoaded || item.data === null) {
                return (
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )
            }


            if (item.error) {
                return <div>
                    Error
            </div>
            }
            return (
                <div className='container'>

                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">available</label>
                            <select className="form-control form-control" id="exampleFormControlSelect1" defaultValue={item.data.available}>
                                <option>Select</option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Title</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title" name='title' value={item.data.title} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Price" value={item.data.price}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">About item</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={item.data.text}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">item fhoto</label>
                            <img src={item.data.images[0]} height='100px' width='100px' className="choosedPhoto mb-3 ml-3"></img>
                            <input type="file" className="form-control-file imgInput" id="exampleFormControlFile1" ></input>
                        </div>
                        <button type="submit" className="btn btn-dark col-2">Create Item</button>

                    </form>
                </div>
            );
        }
        return (
            <div className='container'>

                <form onSubmit={this.onHandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">available</label>
                        <select className="form-control form-control" id="exampleFormControlSelect1">
                            <option>Select</option>
                            <option>true</option>
                            <option>false</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Title</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Title"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Price"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">About item</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">item fhoto</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
                    </div>
                    <button type="submit" className="btn btn-dark col-2" >Create Item</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getItem: (data) => dispatch(fetchItem(data)),
        createItem: (data) => dispatch(createItem(data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(ItemCreatePage);