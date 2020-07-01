import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createCategory, fetchCategories } from '../../store/actions/category';
import CreateCategory from '../../Components/createCategory';

class CategoriesCreatePage extends Component {


    componentDidMount() {
        this.props.getCategories([['categoryMother', '==', ''], ['available', '==', 'true']])
    }

    render() {
        const { categories, createCategory } = this.props
        return (
            <div className='container'>
                <CreateCategory
                    categories={categories.data}
                    createCategory={createCategory} />
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
        getCategories: (data) => dispatch(fetchCategories(data)),
        createCategory: (data) => dispatch(createCategory(data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(CategoriesCreatePage);