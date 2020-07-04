import React from 'react';
import './Footer.scss'
import ShopInfo from '../../Components/shopInfo';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="gen_footer">
                <h1>Хозтовары</h1>

                <ShopInfo />
            </div>
        </footer>
    );
}

export default Footer;