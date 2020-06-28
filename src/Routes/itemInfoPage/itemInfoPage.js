import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem } from '../../store/actions/item';
import './itemInfoPage.scss'
import BuyItem from '../../Components/buyItem';
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';

class ItemInfoPage extends Component {


    componentDidMount() {

        this.props.getItem(this.props.match.params.id);
    }
    render() {
        const { item } = this.props
        console.log(item)

        if (!item.isLoaded || item.data === null) {
            return (
                <Loading />
            )
        }

        if (item.error) {
            return <div>
                <ErrorPage />
            </div>
        }

        return (
            <div className="container">
                <div className="">
                    <h1>{item.data.title}</h1>
                </div>
                <div className="item-gen-div row">
                    <div className="item-info col-6">
                        <img alt="img" src={item.data.image}></img>
                        <p>{item.data.text}</p>
                    </div>
                    <div className="item-right-div col">
                        <BuyItem />
                        <h2>{item.data.price}$</h2>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    // console.log(state)
    return {
        item: state.item.current,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getItem: (data) => dispatch(fetchItem(data)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(ItemInfoPage);