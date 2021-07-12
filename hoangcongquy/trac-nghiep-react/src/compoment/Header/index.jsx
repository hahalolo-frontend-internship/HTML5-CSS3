import React from "react";
import { Link, useLocation } from "react-router-dom";
import User from "../User";
import UserLogin from "../User/UserLogin";

function Header() {
  const location = useLocation();

  return (
    <header className="header container">
      <Link to="/">
        <h1>Trắc nghiệm</h1>
      </Link>
      <nav>
        <ul className="header_item-all">
          <li className="header_item">
            <Link to="/">Đề Thi THPTQG</Link>
          </li>
          <li className="header_item">
            <Link to="/">Đề Thi Kiểm Tra</Link>
          </li>
          <li className="header_item">
            <Link to="/">ENGLISH TEST</Link>
          </li>
          <li className="header_item">
            <Link to="/">IT TEST</Link>
          </li>
          <li className="header_item">
            <Link to="/">ĐẠI HỌC</Link>
          </li>
          <li className="header_item">
            <Link to="/">TÀI LIỆU</Link>
          </li>
          {location.state === true ? <UserLogin /> : <User />}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
