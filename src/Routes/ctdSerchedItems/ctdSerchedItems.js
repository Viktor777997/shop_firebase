import React, { Component } from 'react';
import Categories from '../../Components/Categories';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import { fetchCategory } from '../../store/actions/category';
import { Helmet } from "react-helmet";

import Loading from '../../Components/loading';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';

class CtdSerchedItems extends Component {

    state = {
        id: this.props.match.params.id,
        query: this.props.match.params.query,
    }

    componentDidMount() {
        this.loadData();
        window.scrollTo(0, 0)
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.id !== this.props.match.params.id) {
            this.loadData();
            this.setState({ id: this.props.match.params.id })
        }
    }
    loadData = () => {
        this.props.getItems([['available', '==', 'true'], ['categoryId', '==', this.state.id]]);
        this.props.getCategory(this.state.id);

    }
    render() {
        const { items, category } = this.props;
        const { query } = this.state;

        if (!items.isLoaded || !items.data || !category.isLoaded || !category.data) {
            return <Loading />
        }

        if (items.error || items.data.length === 0) {
            return <ErrorPage />
        }
        return (

            <div className="App">
                <Helmet>
                    <title>{category.data.title}</title>
                    <meta name="description" content={category.data.title} />
                    <meta name='keywords' content={category.data.title} />
                </Helmet>
                <div className="gen_div container">
                    <div className='title-homePage'>
                        <h2>Меню</h2>
                    </div>
                    <div className="general-div ">
                        <Categories />
                        <div className="slide-and-random-cards">
                            <div>
                                <h3 className="text-right pr-3 mb-4">{category.data.title}</h3>
                                <AllCards items={items} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        category: state.category.current,
        items: state.item.list,
        item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCategory: (id) => dispatch(fetchCategory(id)),
        getItems: query => dispatch(fetchItems(query)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(CtdSerchedItems);
