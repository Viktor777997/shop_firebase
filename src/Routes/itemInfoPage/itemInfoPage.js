import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchItem } from '../../store/actions/item';
import './itemInfoPage.scss'
import BuyItem from '../../Components/buyItem';
import Loading from '../../Components/loading';
import ErrorPage from '../errorPage';
import { Helmet } from 'react-helmet';

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
                <Helmet>
                    <title>{item.data.title}</title>
                    <meta name="description" content={item.data.text} />
                    <meta name='keywords' content={item.data.title} />
                </Helmet>
                <div>
                    <h1 className="card-title col">{item.data.title}</h1>
                </div>
                <div className="item-gen-div row col">
                    <div className="item-info pb-10">
                        <div>
                            <img src={item.data.image} alt={item.data.title} title={item.data.title} />
                        </div>
                        <span className='card-info-text'>{item.data.text}</span>
                    </div>
                    <div className="item-right-div">
                        <BuyItem />
                        <div className='card-prices d-block'>
                            <h4>{`Цена розница: ${item.data.personalPrice} ₽`}</h4>
                            <h4>{`Цена мал. опт: ${item.data.bigPrice} ₽`}</h4>
                            <h4>{`Цена круп. опт: ${item.data.smallPrice} ₽`}</h4>
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