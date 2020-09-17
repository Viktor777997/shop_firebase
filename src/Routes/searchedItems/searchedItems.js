import React, { Component } from 'react';
import Categories from '../../Components/Categories';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItems } from '../../store/actions/item';

import Loading from '../../Components/loading';
import AllCards from '../../Components/allCards';
import ErrorPage from '../errorPage';

class SearchedItems extends Component {

    state = {
        query: this.props.match.params.query,
    }

    componentDidMount() {
        this.loadData();
    }
    componentDidUpdate(prevProps, prevState) {
        if ((prevState.query !== this.props.match.params.query)) {
            this.loadData();
            this.setState({ query: this.props.match.params.query })
        }
    }
    loadData = () => {
        this.props.getItems([['available', '==', 'true']], this.state.limit, this.state.startItemId, this.state.query);

    }
    render() {
        const { items } = this.props;

        console.log(items)
        if (!items.isLoaded || !items.data) {
            return <Loading />
        }

        if (items.error) {
            return <ErrorPage />
        }
        return (

            <div className="App">
                <div className="gen_div container">
                    <div className='title-homePage'>
                        <h2>Меню</h2>
                    </div>
                    <div className="general-div ">
                        <Categories />
                        <div className="slide-and-random-cards">
                            <div>
                                {items.data.length !== 0 ? <AllCards items={items} /> : <div className="container pt-5"> <p>Товары но имени "{this.state.query}" не найдены. <br /> Проверте первые буквы или символы.</p> </div>}
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
        items: state.item.list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getItems: (query, limit, startItemId, queryText) => dispatch(fetchItems(query, limit, startItemId, queryText)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(SearchedItems);
