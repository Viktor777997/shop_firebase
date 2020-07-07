import React from 'react';
import { Link } from 'react-router-dom';
import './shopinfo.scss'



const ShopInfo = () => {
    const callInfo = {
        shopAdress: 'г. Ростов-на-Дону, ТК «Атлант»  Ряд 4 Павильон 15; Ряд 25 Павильон 104',
        shopEmail: ' tem-vachagan@yandex.ru',
        shopPhone: '+7 (903) 406-17-58',
    }
    return (
        <div className='shopInfo'>
            <ul className="navbar-nav ">
                <li className="nav-item active">
                    <div className="adress-items">
                        <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>Адресс:</span><Link to='/contact'>{callInfo.shopAdress}</Link>
                    </div>
                </li>
                <li className="nav-item active">
                    <div className="adress-items">
                        <svg className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span>Телефон:</span><a href={`tel:${callInfo.shopPhone}`}>{callInfo.shopPhone}</a>
                    </div>
                </li>
                <li className="nav-item active">
                    <div className="adress-items">
                        <svg className="bi bi-envelope-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                        <span>Email:</span><a href={`mailto:${callInfo.shopEmail}`}>{callInfo.shopEmail}</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ShopInfo;