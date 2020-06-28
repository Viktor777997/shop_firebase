import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateCategory from '../../Components/createCategory'
import { fetchCategory, editCategory, fetchCategories } from '../../store/actions/category';
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';

class CategoryEditPage extends Component {

    state = {
        isDidAction: false
    }


    componentDidMount() {
        this.props.getCategories([['categoryMother', '==', ''], ['available', '==', 'true']])
        this.props.getCategory(this.props.match.params.id);

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isDidAction && !prevProps.category.isLoaded && this.props.category.isLoaded) {
            this.setState({ isDidAction: false });
            this.props.history.push('/admin/allcategories')
        }
    }

    handleEdit = (id, data) => {
        this.props.editCategory(id, data)
        this.setState({ isDidAction: true })
    }

    render() {
        const { category, categories } = this.props;
        // console.log(category)
        if (!category.isLoaded || category.data === null || !categories.isLoaded || categories.data === null) {
            return (
                <Loading />
            )
        }


        if (category.error) {
            return <div>
                <ErrorPage />
            </div>
        }
        return (
            <div className='container'>
                <CreateCategory
                    id={this.props.match.params.id}
                    data={category.data}
                    edit={this.handleEdit}
                    categories={categories.data}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        categories: state.category.list,
        category: state.category.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getCategories: (data) => dispatch(fetchCategories(data)),
        getCategory: (data) => dispatch(fetchCategory(data)),
        editCategory: (id, data) => dispatch(editCategory(id, data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(CategoryEditPage);