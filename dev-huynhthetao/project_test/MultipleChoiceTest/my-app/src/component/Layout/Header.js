import React, { Component } from 'react';
import {
    Link 
} from 'react-router-dom';

class Header extends Component {
    renderLogin() {
        let user = localStorage.getItem('dataUser')
        if(user) {
            return(
                <Link className="link_item" onClick={this.renderLogout}>Đăng xuất</Link>
            )
        } else {
            return(
                <Link className="link_item" to='/register'>Đăng kí</Link>
            )
        }
    }

    renderLogout() {
        localStorage.clear()
    }
    
    render () {
        return (
            <header className="header">
                <div className="container">
                <Link to='/'><img className="img-header" src="https://cdn.24h.com.vn/upload/2-2021/images/2021-05-21/90x50-1621567170-465-width90height50.png" alt="logo page" /></Link>
                <ul className="header_list-button">
                    <li className="item_button"><a className="link_item" href>Hỗ trợ</a></li>
                    <li className="item_button"><a className="link_item" href>Tự luyện</a></li>
                    <li className="item_button"><Link className="link_item" to='/test'>Thi thử</Link></li>
                    <li className="item_button"><Link className="link_item" to='/login'><i className="fal fa-sign-in" />Đăng nhập</Link></li>
                    <li className="item_button">
                        {this.renderLogin()}
                    </li>
                </ul>
                </div>    
            </header>
        )
    }
}

export default Header