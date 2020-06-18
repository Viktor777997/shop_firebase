import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems, deleteItem } from '../../store/actions/item';
import { Link } from 'react-router-dom';

import './allItemsPage.scss'

class AllItemsPage extends Component {
    state = {
        term: '',
        available: null,
    }

    componentDidMount() {
        this.props.getItems()
        // this.saveData(this.props.items.data)
    }
    // componentDidUpdate(prevProps, prevState) {

    //     // if (prevProps.items.data !== this.props.items.data) {
    //     //     // console.log(prevProps)
    //     //     this.props.getItems()

    //     // }


    // }

    delete = async (id) => {
        console.log(id)
        await this.props.deleteItem(id)
        this.props.getItems()
    }

    serchedItems = () => {
        console.log('ascsc')
        // this.props.getItems([['title', '>=', 'u']]);
    }
    // searchData = (data, name) => {
    //     // data.title.toLowerCase().indexOf(name.toLowerCase())

    // }

    // onHandleChnage = (e) => {
    //     this.setState({ term: e.target.value })
    // }

    // saveData = (data) => {
    //     console.log('test')
    //     console.log(data)
    //     this.setState({...this.state, itemsData: data })
    // }
    onAvailableChange = (e) => {
        // this.setState(state =>  ({...state, available: e.target.value} ))

        console.log(e.target.value)
        if (e.target.value === 'true') {
            return this.props.getItems([['available', '==', "true"]]);
        }
        else if (e.target.value === 'false') {
            return this.props.getItems([['available', '==', 'false']]);
        }
        return this.props.getItems()
    }


    render() {

        const { items } = this.props;
        console.log(items);

        // console.log(this.state.itemsData) 

        if (!items.isLoaded || items.data === null) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        if (items.error) {
            return <div>
                Error
            </div>
        }

        return (
            <div className='container'>
                <table className="allItemsTable table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col ">
                                <div className='row pl-3 pr-3'>
                                    <input
                                        className="form-control mr-sm-2 search-input col"
                                        type="search"
                                        placeholder="Name"
                                        aria-label="Search"
                                    // onChange={this.onHandleChnage}
                                    ></input>
                                    <button className="btn my-2 my-sm-0 search-btn" type="button" onClick={this.serchedItems}>
                                        <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </th>
                            <th scope="col">
                                <select className="form-control form-control" id="exampleFormControlSelect1"
                                    onChange={this.onAvailableChange} >
                                    <option>Select</option>                                    
                                    <option>true</option>
                                    <option>false</option>
                                </select>
                            </th>
                            <th scope="col">Price</th>
                            <th scope="col">Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            items.data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.available === 'true' ? 'yes' : 'no'}  </td>
                                    <td>{`${item.price} rub`}</td>
                                    <td>
                                        <a className="mr-2" onClick={() => this.delete(item.id)} >Delete</a>
                                        <Link to={`/admin/itemEdit/${item.id}`} className="mr-2">Edit</Link>
                                        <Link to={`/card/${item.id}`} className="mr-2">Show</Link>
                                    </td>
                                </tr>

                            ))

                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state)
    return {
        items: state.item.list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getItems: query => dispatch(fetchItems(query)),
        deleteItem: query => dispatch(deleteItem(query)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(AllItemsPage);