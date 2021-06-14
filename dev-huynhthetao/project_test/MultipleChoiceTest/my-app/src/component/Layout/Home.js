import React from 'react';

function Home() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner_menu">
                        <ul className="banner_list">
                            <li className="nav_item">
                                <a className="nav_link" href>Học viên</a>
                                {/* <ul class="dropdown_menu">
                                    <li class="dropdown_item"><a href="">Thông tin giáo dục</a></li>
                                    <li class="dropdown_item"><a href="">Tự luyện</a></li>
                                    <li class="dropdown_item"><a href="">Thi thử</a></li>
                                    <li class="dropdown_item"><a href="">Thống kê thi các cấp</a></li>
                                    <li class="dropdown_item"><a href="">Bảng xếp hạng tuần</a></li>
                                    <li class="dropdown_item"><a href="">Xem kết quả thi</a></li>
                                    <li class="dropdown_item"><a href="">Tin từ ban tổ chức</a></li>
                                </ul> */}
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href>Giáo viên</a>
                                {/* <ul class="dropdown_menu">
                                    <li class="dropdown_item"><a href="">Thi cấp trường</a></li>
                                    <li class="dropdown_item"><a href="">Kết quả thi các cấp</a></li>
                                    <li class="dropdown_item"><a href="">Kết quả thi trắc nghiệm</a></li>
                                    <li class="dropdown_item"><a href="">Quản lí mã thi</a></li>
                                    <li class="dropdown_item"><a href="">Thư viện kiến thức</a></li>
                                    <li class="dropdown_item"><a href="">Tin từ ban tổ chức</a></li>
                                    <li class="dropdown_item"><a href="">Quản lí lớp</a></li>
                                    <li class="dropdown_item"><a href="">Quản lí bài tập</a></li>
                                </ul> */}
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href>Tin tức</a>
                                {/* <ul class="dropdown_menu">
                                        <li class="dropdown_item"><a href="">Tin từ ban tổ chức</a></li>
                                        <li class="dropdown_item"><a href="">Sự kiện</a></li>
                                        <li class="dropdown_item"><a href="">Tin tức muôn nơi</a></li>
                                        <li class="dropdown_item"><a href="">tạp chí tiếng anh</a></li>
                                    </ul> */}
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href>Cuộc thi</a>
                                {/* <ul class="dropdown_menu">
                                            <li class="dropdown_item"><a href="">Thể lệ cuộc thi</a></li>
                                            <li class="dropdown_item"><a href="">Công văn địa phương</a></li>
                                            <li class="dropdown_item"><a href="">Thống kê</a></li>
                                        </ul> */}
                            </li>
                            <li className="nav_item">
                                <a className="nav_link" href>Hướng dẫn</a>
                                {/* <ul class="dropdown_menu">
                                        <li class="dropdown_item"><a href="">Hướng dẫn chung</a></li>
                                        <li class="dropdown_item"><a href="">Hướng dẫn làm bài thi</a></li>
                                        <li class="dropdown_item"><a href="">Câu hỏi thường gặp</a></li>
                                    </ul> */}
                            </li>
                            <li className="nav_item">
                            <a className="nav_link" href>Kết quả</a>
                            {/* <ul class="dropdown_menu">
                                    <li class="dropdown_item"><a href="">Tra cứu kết quả</a></li>
                                    <li class="dropdown_item"><a href="">Kết quả thi</a></li>
                                </ul> */}
                        </li>
                        </ul>
                        <div className="search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <i className="far fa-search" />
                        </div>
                    </div>       
                </div>
                <ul className="banner_content">
                    <div className="container">
                        <li className="content_item banner_intro">
                            <p>CHÀO MỪNG BẠN ĐẾN VỚI LUYỆN THI IOE TRONG 30 NGÀY</p>
                            <p>Vào tự luyện ngay</p>
                            <p>Lịch thi IOE</p>
                        </li>
                        <li className="content_item banner_countdown">
                            <p>HOÀN THÀNH CÁC VÒNG THI CHÍNH THỨC TRONG 2020-2021</p>
                        </li>
                        <li className="content_item home_contact">
                            <ul className="home_contact-infor">
                                <h3>HỖ TRỢ</h3>
                                <li className="infor_item">
                                    <i className="fal fa-phone-volume" />
                                    <div className="infor-content infor_item-phone">
                                    <p>Tổng đài 0969966742</p>
                                    <p>Từ 8:00 đến 17:30(T2-T6)</p>
                                    </div>
                                </li>
                                <li className="infor_item">
                                    <i className="far fa-envelope" />
                                    <div className="infor-content infor_item-email">
                                    <p>Email: IOE@GO.VN</p>
                                    <p>Hỗ trợ nội dung và thể lệ cuộc thi</p>
                                    </div>
                                </li>
                                <li className="infor_item">
                                    <i className="far fa-comment-alt-dots" />
                                    <div className="infor-content infor_item-messager">
                                    <p>Messager trên Facebook</p>
                                    <p>Từ 8:00 đến 17:30(T2-T6)</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="home_contact-option">
                                <h3>Hướng dẫn</h3>
                                <p><i className="fas fa-play" />Hướng dẫn chung</p>
                                <p><i className="fas fa-play" />Hướng dẫn làm bài thi</p>
                                <p><i className="fas fa-play" />Câu hỏi thường gặp</p>
                            </div>
                        </li>
                    </div>    
                </ul>      
            </div>
            <div className="hot-new">
                <div className="container">
                    <div className="hot-new_left">
                        <div className="title_underline">
                            <p className="title_head">THÔNG TIN TỪ BAN TỔ CHỨC</p>
                            <span>TIN MỚI NHẤT</span>
                            <hr />
                        </div>
                        <ul className="hot-new_list">
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                        </ul>
                    </div>
                    <div className="hot-new_right">
                        <div className="title_underline">
                            <p className="title_head">SỰ KIỆN</p>
                            <span>TIN MỚI NHẤT</span>
                            <hr />
                        </div>
                        <ul className="hot-new_list">
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                            <li className="hot-new_item">
                                <div className="hot-new-day">
                                    TH.TƯ
                                    <span>25/5/2021</span>
                                </div>
                                <p className="hot-new-content">BTC IOE thông báo về việc trao giải kỳ thi cấp Quốc gia năm học 2020-2021</p>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home