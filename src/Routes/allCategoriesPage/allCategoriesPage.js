import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteCategory, fetchCategories } from '../../store/actions/category';
import { Link } from 'react-router-dom';

import './allItemsPage.scss'
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';

class AllCategoriesPage extends Component {
    state = {
        term: '',
        available: "all",
        category: "all",
        isDidAction: false
    }

    componentDidMount() {
        this.loadData()
    }


    componentDidUpdate(prevProps, prevState) {
        if ((this.state.isDidAction && !prevProps.category.isLoaded && this.props.category.isLoaded) || (this.state.category !== prevState.category)) {
            this.loadData()
            this.setState({ isDidAction: false });
        }

    }

    loadData = () => {
        if (this.state.category === 'all') {
            return this.props.getCategories()
        }
        return this.props.getCategories([['available', '==', 'true'], ['categoryMother', '==', `${this.state.category}`]])
    }
    delete = (id) => {
        this.props.deleteCategory(id);

        this.setState({
            isDidAction: true
        });
    }



    onAvailableChange = (e) => {
        const available = e.target.value;
        this.setState(state => ({ ...state, available }));
        if (available === 'true') {
            return this.props.getCategories([['available', '==', "true"]]);
        }
        else if (available === 'false') {
            return this.props.getCategories([['available', '==', 'false']]);
        }
        return this.props.getCategories()
    }
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(state => ({ ...state, category }));

    }


    render() {

        const { categories } = this.props;


        if (!categories.isLoaded || !categories.data) {
            return (
                <Loading />
            )
        }

        if (categories.error) {
            return <div>
                <ErrorPage />
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
                                        placeholder="Имя"
                                        aria-label="Search"
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
                                <select className="form-control form-control" id="exampleFormControlSelect6"
                                    onChange={this.onAvailableChange} value={this.state.available}>
                                    <option value="all">Все</option>
                                    <option value="true">Да</option>
                                    <option value="false">Нет</option>
                                </select>
                            </th>
                            <th scope="col">
                                <select className="form-control form-control" id="exampleFormControlSelect7"
                                    onChange={this.onCategoryChange} value={this.state.category}>
                                    <option value="all">Все</option>
                                    {
                                        this.state.category !== "all" ? <option value={this.state.category}>Показать подкатегорию</option> : null
                                    }
                                    {
                                        categories.data.map(item => (
                                            item.categoryMother !== "" ? null : <option key={item.id} value={item.id} > {item.title} </option>
                                        ))
                                    }

                                </select>
                            </th>
                            <th scope="col">Редактировать</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.available === 'true' ? 'Да' : 'Нет'}  </td>
                                    <td>{item.categoryMother === '' ? 'Основная категория' : null}</td>
                                    <td>
                                        <button className="delete-btn mr-2" onClick={() => this.delete(item.id)} >Удалить</button>
                                        <Link to={`/admin/categoryEdit/${item.id}`} className="mr-2">Изменить</Link>
                                        {/* <Link to={`/card/${item.id}`} className="mr-2">Show</Link> */}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div >
        );
    }

}

function mapStateToProps(state) {
    return {
        categories: state.category.list,
        category: state.category.current,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCategories: query => dispatch(fetchCategories(query)),
        deleteCategory: query => dispatch(deleteCategory(query)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(AllCategoriesPage);

