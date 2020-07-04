import React from 'react';
import YandexMap from '../../Components/YandexMap';
import ShopInfo from '../../Components/shopInfo'
import './ContactPage.scss'

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='contact-title-div'>
                <div>
                    <h1>Свяжитесь с нами</h1>
                    <h3><a href='tel:+7 (903) 406-17-58'>+7 (903) 406-17-58</a></h3>
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