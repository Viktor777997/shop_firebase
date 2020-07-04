import React from 'react';
import './errorPage.scss'

const ErrorPage = () => {
    return (

        <div id="notfound">
            <div className="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>Упс!</h1>
                <h2>
                    Что-то пошло не так!
                </h2>
                <a href="/">Домой</a>

            </div>
        </div>

    );
}

export default ErrorPage;