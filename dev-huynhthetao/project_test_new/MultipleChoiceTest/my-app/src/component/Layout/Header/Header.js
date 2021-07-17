import React, { useState } from 'react';
import './Header.css';
import {
    Link
} from 'react-router-dom';

export default function Header() {
    const [ flag, setFlag ] = useState(true)
    function renderLogin() {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'));
        if(dataUser) {
            return (
                <>
                    <li className="item__button">
                        <span>{`Hi, ${dataUser.name}`}</span>
                        <img style={{width: '30px', borderRadius: '50%'}} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/205286388_1655715521291274_5893127134735839267_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5457dZALcjcAX_jxU_R&_nc_ht=scontent-hkt1-2.xx&oh=21cdbb5d1769b65dc0110c2949643a0e&oe=60E8C352" alt="avt" />
                    </li>
                    <li>
                        <Link className="item__link" to="/login" onClick={renderLogout}>Đăng xuất</Link>
                    </li>
                </>
            )
        } else {
            return <li className="item__button"><Link className="item__link" to='/login'><span>Đăng nhập<i className="fas fa-user"></i></span></Link></li>
        }
    }

    function renderLogout() {
        localStorage.clear();
        setFlag(false)
    }

    return (
        <header className="main__header">
            <div className="header">
                <div className="header__img">
                    <Link to='/'><img className="img-header" src="https://cdn.24h.com.vn/upload/2-2021/images/2021-05-21/90x50-1621567170-465-width90height50.png" alt="logo page" /></Link>
                </div>
                <ul className="header__list">
                    <li className="item__button"><Link className="item__link" to='/'>Trang chủ</Link></li>
                    <li className="item__button"><a className="item__link" href="#a">Hỗ trợ</a></li>
                    <li className="item__button"><a className="item__link" href="#a">Tự luyện</a></li>
                    <li className="item__button"><Link className="item__link" to='/test'>Thi thử</Link></li>
                    {renderLogin()}
                </ul>  
            </div>
        </header>
    );
}


