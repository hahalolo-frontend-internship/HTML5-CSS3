import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import icon_logout from "../../img/sign-out-alt-solid.svg";
import icon_user from "../../img/user-icon.png";
import "./Header.scss";

function Header(props) {
  const history = useHistory();
  function logout() {
    localStorage.removeItem("isSignIn");
    history.push("/");
    props.signIn("logout");
  }

  return (
    <>
      <div className="header flex-items-center">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="logo flex-items-center">
              <Link to="/">
                <img src={logo} alt="logo web" />
              </Link>
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
              {props.user ? (
                <>
                  <input type="checkbox" id="signin" />

                  <label className="user-name" htmlFor="signin">
                    {props.user.firstname} {props.user.lastname}
                  </label>

                  <div
                    className="option_signin flex-items-center"
                    onClick={() => logout()}
                  >
                    <img src={icon_logout} alt="anh logout" />
                    <p>&nbsp;&nbsp;Đăng xuất</p>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <p className="user-name">Đăng nhập</p>
                </Link>
              )}
              <div
                className="user-icon flex-items-center"
                onClick={() => logout()}
              >
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
