import React from 'react';
import './YandexMap.scss'

const YandexMap = () => {
    return (
        <div className="page-map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A71614ccbfa01049f7d99834c753f2e18e08ee823287e236c15648dc86306d171&amp;source=constructor"
                    width="100%" height="400px" frameBorder="0"></iframe>
            </div>
    );
}

export default YandexMap;