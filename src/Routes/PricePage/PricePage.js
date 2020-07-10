import React, { Component } from 'react';

import './PricePage.scss'
import { Helmet } from "react-helmet";

class PricePage extends Component {
    render() {

        return (

            <div className="container" >
                <Helmet htmlAttributes>
                    <title>Прайс-лист</title>
                    <meta name="description" content="Оцинкованные товары, Садовый инветарь, Черенки, Чугунное литье, Мангалы" />
                    <meta name="keywords" content="Оцинкованные товары, Садовый инветарь, Черенки, Чугунное литье, Мангалы" />
                </Helmet>
                <div>
                    <h1 className="prices-title">
                        Прайс-лист
                    </h1>
                </div>
                <div className="prices-div">
                    <ul>
                        <li><a href="/Прайс-Лист Оцинкованные товары.xlsx" target="_blank" download>Оцинкованные товары</a></li>
                        <li><a href="/Прайс-Лист Садовый инветарь.xlsx" target="_blank" download>Садовый инветарь</a></li>
                        <li><a href="/Прайс-Лист Черенки.xlsx" target="_blank" download>Черенки</a></li>
                        <li><a href="/Прайс-Лист Чугун.xlsx" target="_blank" download>Чугунное литье</a></li>
                        <li><a href="/Прайс-Лист Мангалы.xlsx" target="_blank" download>Мангалы</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PricePage;