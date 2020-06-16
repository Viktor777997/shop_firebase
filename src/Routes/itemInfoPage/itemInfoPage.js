import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem } from '../../store/actions/item';
import './itemInfoPage.scss'
import BuyItem from '../../Components/buyItem';

class ItemInfoPage extends Component {
   

    componentDidMount() {

        this.props.getItem(this.props.match.params.id);
    }
    render() {
        // console.log(this.props)
        const { item } = this.props
        console.log(item)

        if (!item.isLoaded || item.data === null) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        if (item.error) {
            return <div>
                Error
            </div>
        }

        return (
            <div className="container">
                <div className="">
                    <h1>{item.data.title}</h1>
                </div>
                <div className="item-gen-div row">
                    <div className="item-info col-6">
                        <img src={item.data.images[0]}></img>
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