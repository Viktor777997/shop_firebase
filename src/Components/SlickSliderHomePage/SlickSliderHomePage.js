import React, { Component } from "react";
import Slider from "react-slick";
import './SlickSliderHomePage.scss'


export default class SlickSliderHomePage extends Component {
    render() {
        const settings = {
            infinite: true,
            // autoplay: true,
            autoplaySpeed: 1000,
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
        return (
            <div>
                <Slider {...settings}>
                   
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                        <div className="slide-pages">
                            <a href="">
                                <img src="https://irantourismnews.com/wp-content/uploads/2017/04/Isfahan-Tourism-28-1.jpg"
                                    alt=""></img>
                            </a>
                        </div>
                </Slider>
            </div>
        );
    }
}