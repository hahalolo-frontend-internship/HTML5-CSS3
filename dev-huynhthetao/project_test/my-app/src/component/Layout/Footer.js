import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="img_footer">
                    <img src="https://cdn.24h.com.vn/upload/2-2021/images/2021-05-21/90x50-1621567170-465-width90height50.png" alt="logo page" />
                </div>
                <ul className="footer_menu">
                    <li className="menu_item">
                        <p className="menu-title">Tin tức</p>
                        <a className="link_item" href>Tin từ Ban tổ chức</a>
                        <a className="link_item" href>Sự kiện menu-title</a>
                        <a className="link_item" href>Tin tức muôn nơi</a>
                        <a className="link_item" href>Tạp chí Tiếng Anh</a>
                    </li>
                    <li className="menu_item">
                        <p className="menu-title">Học viên</p>
                        <a className="link_item" href>Tự luyện</a>
                        <a className="link_item" href>Xếp hạng</a>
                        <a className="link_item" href>Lịch thi</a>
                        <a className="link_item" href>Thi thử</a>
                    </li>
                    <li className="menu_item">
                        <p className="menu-title">Giáo viên</p>
                        <a className="link_item" href>Quản lí học viên</a>
                        <a className="link_item" href>Thống kê</a>
                        <a className="link_item" href>Giao bài tự luyện</a>
                        <a className="link_item" href>Diễn đàn</a>
                    </li>
                    <li className="menu_item">
                        <p className="menu-title">Phụ huynh</p>
                        <a className="link_item" href>Báo cáo kết quả học tập</a>
                        <a className="link_item" href>Diễn đàn</a>
                    </li>
                    <li className="menu_item">
                        <p className="menu-title">Dành cho quản trị viên</p>
                        <a className="link_item" href>Bạn là quản trị viên?</a>
                    </li>
                </ul>
            </div>    
        </div>
    )
}

export default Footer