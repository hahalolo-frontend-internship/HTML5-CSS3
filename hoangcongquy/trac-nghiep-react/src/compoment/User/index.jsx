import React from "react";
import { Link } from "react-router-dom";
import "./user.css"

function User() {
  return (
    <ul className="header-user">
      <li className="header_item-log header_item-login">
        <Link to="/Login">Đăng nhập</Link>
        <i className="fas fa-user-circle"></i>
      </li>
      <li className="header_item-log">
        <Link to="/Registration">Đăng ký </Link>
        <i className="fas fa-sign-out-alt"></i>
      </li>
    </ul>
  );
}
export default User;
