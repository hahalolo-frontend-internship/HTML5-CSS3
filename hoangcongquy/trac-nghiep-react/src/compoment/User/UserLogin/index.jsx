import React from "react";
import { Link } from "react-router-dom";
import "./userLogin.css"

function UserLogin(props) {
  
   return (
    <ul className="header-user">
      <li className="header_item-log header_item-logout">
       <p>Chào bạn: quy 
          {/* {formValues.name} */}
          </p>
        <p className="logout"><Link to="/">Đăng xuất</Link></p>
      </li>
    </ul>
  );
}
export default UserLogin;
