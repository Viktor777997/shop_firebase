import React, { Component } from 'react';
import Categories from '../../Components/Categories';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';
import { fetchCategory } from '../../store/actions/category';
import Loading from '../../Components/loading';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';

class CtdSerchedItems extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getCategory(id)
        this.props.getItems([['available', '==', 'true'], ['categoryId', '==', id]]);

    }

    render() {
        const { items, category } = this.props;

        if (!items.isLoaded || !items.data || !category.isLoaded || !category.data) {
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

            <div className="App">
                <div className="gen_div container">
                    <h1 >Title</h1>

                    <div className="general-div ">
                        <Categories />

                        <div className="slide-and-random-cards">
                            <div>
                                {/* <div className='d-flex justify-content-end font-weight-light pr-3'></div> */}
                                <p className="text-right font-weight-lighter pr-3">{category.data.title}</p>
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
