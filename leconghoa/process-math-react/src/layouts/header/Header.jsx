import React from "react";
import logo from "../../img/logo.png";
import icon_user from "../../img/user-icon.png";
import "./Header.scss";
function Header() {
  return (
    <>
      <div className="header flex-items-center">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="logo flex-items-center">
              <img src={logo} alt="logo web" />
            </div>
            <ul className="navbar flex-items-center">
              <li>
                <a href="/#">THI THPTQG</a>
              </li>
              <li className="active">
                <a href="/#">ĐỀ THI KIỂM TRA</a>
              </li>
              <li>
                <a href="/#">ENGLISH TEST</a>
              </li>
              <li>
                <a href="/#">IT TEST</a>
              </li>
              <li>
                <a href="/#">ĐẠI HỌC</a>
              </li>
              <li>
                <a href="/#">HƯỚNG NGHIỆP</a>
              </li>
              <li>
                <a href="/#">TÀI LIỆU</a>
              </li>
            </ul>
            <button className="btn-login flex-items-center">
              <p className="user-name">Đăng nhập</p>
              <div className="user-icon flex-items-center">
                <img src={icon_user} alt="avatar" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="term-link">
        <div className="grid wide">Bài kiểm tra</div>
      </div>
    </>
  );
}

export default Header;
