import React from 'react';
import YandexMap from '../../Components/YandexMap';
import ShopInfo from '../../Components/shopInfo'
import './ContactPage.scss'

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='contact-title-div'>
                <div>
                    <h1>Contact US</h1>
                    <h3><a href='tel:+1-303-499-7111'>+1 (303) 499-7111</a></h3>
                </div>
            </div>
            <div className='container'>
                <ShopInfo />
                <YandexMap />
            </div>
        </div>
    );
}

export default ContactPage;