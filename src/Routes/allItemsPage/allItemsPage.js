import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems, deleteItem } from '../../store/actions/item';
import { fetchCategories } from '../../store/actions/category';

import { Link } from 'react-router-dom';
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';

class AllItemsPage extends Component {

    state = {
        term: '',
        available: "all",
        isDidAction: false,
        categoryId: "",
    }

    componentDidMount() {
        this.loadData()
        this.props.getCategories([['available', '==', 'true']])

    }



    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isDidAction && !prevProps.category.isLoaded) || (this.state.categoryId !== prevState.categoryId)) {
            this.loadData()
            this.setState({ isDidAction: false });
        }
    }



    loadData = () => {
        if (this.state.categoryId === '') {

            return this.props.getItems();
        }

        this.props.getItems([['categoryId', '==', this.state.categoryId]])
    }

    delete = (id) => {
        this.props.deleteItem(id);
        this.setState({
            isDidAction: true
        });
    }

    serchedItems = () => {
        // this.props.getItems([['title', '>=', 'u']]);
    }
    onCategoryChange = (e) => {
        const categoryId = e.target.value;
        this.setState(state => ({ ...state, categoryId }));

    }

    onAvailableChange = (e) => {
        const available = e.target.value;
        this.setState(state => ({ ...state, available }));

        if (available === 'true') {
            return this.props.getItems([['available', '==', "true"]]);
        }
        else if (available === 'false') {
            return this.props.getItems([['available', '==', 'false']]);
        }
        return this.props.getItems()
    }

    render() {
        const { items, categories } = this.props

        if (!items.isLoaded || !items.data || !categories.isLoaded || !categories.data) {
            return (
                <Loading />

            )
        }

        if (items.error) {
            return <div>
                <ErrorPage />
            </div>
        }
        return (
            <div className='container' >
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
                                    <button className="btn my-2 my-sm-0 search-btn" type="button" >
                                        <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </th>
                            <th scope="col">
                                <select className="form-control form-control" id="exampleFormControlSelect8"
                                    onChange={this.onAvailableChange} value={this.state.available}>
                                    <option value="all">All</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select>
                            </th>
                            <th scope="col">
                                <select className="form-control form-control" id="exampleFormControlSelect7"
                                    onChange={this.onCategoryChange} value={this.state.categoryId}>
                                    <option value="">All</option>
                                    {
                                        this.state.categoryId !== "" ? <option value={this.state.categoryId}>Showed</option> : null
                                    }
                                    {
                                        categories.data.map(item => (
                                            item.categoryMother === '' ? null : <option key={item.id} value={item.id}>{item.title}</option>
                                        ))
                                    }
                                </select>
                            </th>
                            <th scope="col">Slide item</th>
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
                                    <td>{item.id}</td>
                                    <td>{item.slideItem === 'true' ? 'yes' : 'no'}</td>
                                    <td>{`${item.price} rub`}</td>
                                    <td>
                                        <button className="delete-btn mr-2" onClick={() => this.delete(item.id)} >Delete</button>
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
    return {
        items: state.item.list,
        categories: state.category.list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getItems: query => dispatch(fetchItems(query)),
        deleteItem: query => dispatch(deleteItem(query)),
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

export default enhance(AllItemsPage);