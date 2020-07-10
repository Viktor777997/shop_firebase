import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { unAuthenticateUser } from '../../store/actions/auth';


class AdminHomePage extends Component {

    render() {

        return (
            <div className='conainer'>
                <ul className='d-block text-center admin-button-group'>
                    <li className=' mb-3'>
                        <Link to='/admin/itemCreate' className="btn btn-dark col-3">Создать товары</Link>
                    </li>
                    <li className=' mb-3'>
                        <Link to='/admin/allItems' className="btn btn-dark col-3">Все товары</Link>
                    </li>
                    <li className=' mb-3'>
                        <Link to='/admin/categoriesCreate' className="btn btn-dark col-3">Создать категорию</Link>
                    </li>
                    <li className=' mb-3'>
                        <Link to='/admin/allCategories' className="btn btn-dark col-3">Все категории</Link>
                    </li>
                    <li className=' mb-3'>
                        <button className="btn btn-dark col-3" onClick={() => this.props.exit()}>Выйти</button>
                    </li>
                </ul>
            </div>
        );
    }
}




function mapDispatchToProps(dispatch) {
    return {
        exit: () => dispatch(unAuthenticateUser()),
    };
}

const enhance = compose(
    connect(
        null,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(AdminHomePage);
