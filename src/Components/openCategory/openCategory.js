import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchCategories } from '../../store/actions/category';
import { Link } from 'react-router-dom';

import './openCategory.scss'
import ApiService from '../../services/api-service';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';


class OpenCategory extends Component {

    state = {
        categories: {
            loaded: false,
            data: null
        }
    }

    componentDidMount() {

        const Api = new ApiService(getFirestore(), getFirebase());
        Api.getCategories([["categoryMother", "==", this.props.motherId], ['available', '==', 'true']])
            .then(payload => {
                this.setState(state => ({
                    ...state,
                    categories: {
                        ...state.categories,
                        loaded: true,
                        data: payload
                    }
                }))
            })
            .catch(payload => {
                console.log("error: ", payload)
            });
    }

    render() {
        const { categories } = this.state;


        if (!categories.loaded || !categories.data) {
            return null
        }
        return (
            <div className="open-category">
                <ul className="categories_ul">
                    {
                        categories.data.map(item => (
                            <li key={item.id}>
                                <Link to={`/ctd/${item.id}`} className='categories_a opened_categories_a'>{item.title}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
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

export default enhance(OpenCategory);