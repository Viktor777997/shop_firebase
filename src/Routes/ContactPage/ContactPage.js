import React from 'react';
import YandexMap from '../../Components/YandexMap';
import './ContactPage.scss'

const ContactPage = () => {
    return (
        <div >
            <div className='contact-title-div'>
                <div>
                    <h1>Contact US</h1>
                    <h3>+ 1235 2355 98</h3>
                </div>
            </div>
            <div className='container'>
                <div className="adress-cont d-block">
                    <div className="adress-items"><img src="../../assets/images/location-icon.png" alt=""></img><span>Address:</span>198 West 21th Street, Suite 721</div>
                    <div className="adress-items"><img src="../../assets/images/phone-icon.png" alt=""></img><span>Phone:</span>+ 1235 2355 98</div>
                    <div className="adress-items"><img src="../../assets/images/mail-icon.png" alt=""></img><span>Email:</span>info@yoursite.com</div>
                </div>
                <YandexMap />
            </div>
        </div>
    );
}

export default ContactPage;