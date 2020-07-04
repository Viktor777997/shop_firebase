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
        const { item } = this.props;

        if (!item.isLoaded || !item.data) {
            return (
                <Loading />
            )
        }

        if (item.error || !item.data.title) {
            return <div>
                <ErrorPage />
            </div>
        }

        return (
            <div className="card-info container">
                <div className="">
                    <h1 className="card-title col">{item.data.title}</h1>
                </div>
                <div className="item-gen-div row col">
                    <div className="item-info pb-10">
                        <div>
                            <img alt="img" src={item.data.image}></img>
                        </div>
                        <span className='card-info-text'>{item.data.text}</span>
                    </div>
                    <div className="item-right-div">
                        <BuyItem />
                        <div className='card-prices d-block'>
                            <h4>{`Цена: ${item.data.bigPrice} ₽`}</h4>
                            <h4>{`Оптовая цена:  ${item.data.smallPrice} ₽`}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
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