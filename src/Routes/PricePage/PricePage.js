import React, { Component } from 'react';

import './PricePage.scss'

class PricePage extends Component {
    render() {

        return (

            <div className="container" >
                <div>
                    <h1 className="prices-title">
                        prices-div
                    </h1>
                </div>
                <div className="prices-div">
                    <ul>
                        <li><a href="/New Лист Microsoft Excel.xlsx" target="_blank" download>Excel File</a></li>
                        <li><a href="">Exel file</a></li>
                        <li><a href="">Exel file</a></li>
                        <li><a href="">Exel file</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PricePage;