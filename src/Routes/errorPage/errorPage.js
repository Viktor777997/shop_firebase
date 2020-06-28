import React from 'react';
import './errorPage.scss'

const ErrorPage = () => {
    return (

        <div id="notfound">
            <div class="notfound">
                <div class="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>oops!</h1>
                <h2>Error 404 : Page Not Found</h2>
                <a href="/">go home</a>

            </div>
        </div>

    );
}

export default ErrorPage;