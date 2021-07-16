import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="main__footer">
            <div className="footer">
                <div className="footer__img">
                    <img src="https://cdn.24h.com.vn/upload/2-2021/images/2021-05-21/90x50-1621567170-465-width90height50.png" alt="logo page" />
                </div>
                <ul className="footer__menu">
                    <li className="menu__item">
                        <p className="menu__title">Tin tức</p>
                        <a className="link__item" href='#a'>Tin từ Ban tổ chức</a>
                        <a className="link__item" href='#a'>Sự kiện menu-title</a>
                        <a className="link__item" href='#a'>Tin tức muôn nơi</a>
                        <a className="link__item" href='#a'>Tạp chí Tiếng Anh</a>
                    </li>
                    <li className="menu__item">
                        <p className="menu__title">Học viên</p>
                        <a className="link__item" href='#a'>Tự luyện</a>
                        <a className="link__item" href='#a'>Xếp hạng</a>
                        <a className="link__item" href='#a'>Lịch thi</a>
                        <a className="link__item" href='#a'>Thi thử</a>
                    </li>
                    <li className="menu__item">
                        <p className="menu__title">Giáo viên</p>
                        <a className="link__item" href='#a'>Quản lí học viên</a>
                        <a className="link__item" href='#a'>Thống kê</a>
                        <a className="link__item" href='#a'>Giao bài tự luyện</a>
                        <a className="link__item" href='#a'>Diễn đàn</a>
                    </li>
                    <li className="menu__item">
                        <p className="menu__title">Phụ huynh</p>
                        <a className="link__item" href='#a'>Báo cáo kết quả học tập</a>
                        <a className="link__item" href='#a'>Diễn đàn</a>
                    </li>
                    <li className="menu__item">
                        <p className="menu__title">Dành cho quản trị viên</p>
                        <a className="link__item" href='#a'>Bạn là quản trị viên?</a>
                    </li>
                </ul> 
            </div>    
        </div>
    )
}

