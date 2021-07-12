import React, { useState, useEffect } from "react";
import axios from "axios";
import validate from "../Login/validatorLogin";

import "../Registration/registration.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [blog, setBlog] = useState(true);
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/accounts");
      setData(result.data);
      // console.log(result.data);
    }
    fetchData();
  }, []);
  

  function handleSubmit(e) {
    e.preventDefault();
    if (formData === errors) {
      return formData;
    } else {
      const find = data.find(
        (item) => item.name === formData.name || setErrors(formData)
      );
      // console.log(find);
      if (
        find &&
        find.password === formData.password &&
        formData.password !== "" &&
        formData.name !== ""
      ) {
        history.push("/main1/1", blog);
        setBlog(false);
      }
    }
    setErrors(validate(formData));
  }
  
  return (
    <>
      <div className="container-login">
        <div className="login-logo">
          <Link to="/">
            <h2>Trắc nghiệm</h2>
          </Link>
        </div>
        <div className="login_form">
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                value={formData.name} //
                className="form-control"
                placeholder="Nhập tên tài khoản của bạn"
                name="name"
                onChange={onChange} //
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                value={formData.password}
                className="form-control"
                placeholder="Nhập mật khẩu"
                name="password"
                onChange={onChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="btn btn-login" type="submit">
              Đăng Nhập
            </button>
            <Link to="/Registration">
              <h6>Forgot Resgistration? ClickHere</h6>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
