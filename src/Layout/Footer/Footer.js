import React from 'react';
import './Footer.scss'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="gen_footer">
                <h1>Navbar</h1>

                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <div className="adress-items">
                            <img src="./images/location-white.png" alt=""></img><span>Address:</span>198 West
                        21th Street, Suite 721</div>
                    </li>
                    <li className="nav-item active">
                        <div className="adress-items">
                            <img src="./images/phone-icon-white.png" alt=""></img><span>Phone:</span>+ 1235 2355
                        98</div>
                    </li>
                    <li className="nav-item active">
                        <div className="adress-items">
                            <img src="./images/mail-icon-white.png" alt=""></img><span>Email:</span>info@yoursite.com</div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;