import React from 'react';
import YandexMap from '../../Components/YandexMap';
import ShopInfo from '../../Components/shopInfo'
import './ContactPage.scss'
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <Helmet>
                <title>Свяжитесь с нами</title>
                <meta name="description" content='+7 (903) 406-17-58, Свяжитесь с нами' />
                <meta name='keywords' content='Ростов-на-Дону ТК «Атлант» Ряд 4 Павильон 15 Ряд 25 Павильон 104, Ростов-на-Дону, ТК «Атлант» Ряд 4 Павильон 15, Ряд 25 Павильон 104' />
            </Helmet>
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