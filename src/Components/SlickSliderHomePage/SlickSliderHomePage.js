import React, { Component } from "react";
import Slider from "react-slick";
import './SlickSliderHomePage.scss';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSlideItems } from '../../store/actions/item';
import Loading from '../loading'
import ErrorPage from "../../Routes/errorPage";

class SlickSliderHomePage extends Component {
    componentDidMount() {

        this.props.getItems([['available', '==', 'true'], ['slideItem', '==', 'true']]);
    }

    render() {
        const { items } = this.props;
        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 3,
            dots: true,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 777,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                    }
                },
            ]
        };

        if (!items.isLoaded || !items.data) {
            return (
                <Loading />
            )
        }


        if (items.error) {
            return <div>
                <ErrorPage />
            </div>
        }
        if (items.data.length < 4) {
            return null
        }
        return (
            <div>
                <Slider {...settings}>
                    {
                        items.data.map(item => (
                            <div className="slide-pages" key={item.id}>
                                <Link to={`/card/${item.id}`}>
                                    <img src={item.image}
                                        alt=""></img>
                                </Link>
                            </div>

                        ))
                    }
                </Slider>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        items: state.item.slideItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getItems: query => dispatch(fetchSlideItems(query)),
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
);

export default enhance(SlickSliderHomePage);