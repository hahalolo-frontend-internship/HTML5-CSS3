import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import validate from "./validatorInfo";
import "./registration.css";
import axios from "axios";

function Registration() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
    errorConfirm: "",
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
    }
    fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData === errors) {
      return formData;
    } else {
      const find = data.every(
        (item) =>
          item.name !== formData.name &&
          formData.password !== "" &&
          formData.email !== "" &&
          formData.phone !== ""
      );
      setErrors(validate(formData));
      setFormData({ errorConfirm: "Bạn chưa nhập hoặc tài khoản đã tồn tài" });
      if (!find === false) {
        const formValues = {
          name: formData.name,
          password: formData.password,
          phone: formData.phone,
          email: formData.email,
        };
        axios.post("http://localhost:3000/accounts", formValues);
        history.push("/Login");
        alert("Bạn đã đăng ký thành công");
      } else {
        return formData;
      }
    }
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
          <h1>Registration</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                value={formData.name}
                className="form-control"
                placeholder="Nhập tên tài khoản của bạn"
                name="name"
                onChange={onChange}
              />
              <p>{formData.errorConfirm}</p>
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
            <div className="form-group">
              <label htmlFor="">Số điện thoại</label>
              <input
                type="text"
                value={formData.phone}
                className="form-control"
                placeholder="Nhập sdt"
                name="phone"
                onChange={onChange}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                value={formData.email}
                className="form-control"
                placeholder="Nhập email"
                name="email"
                onChange={onChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <button className="btn btn-registration">Đăng Ký</button>
            <Link to="/Login">
              <h6>Forgot Login? ClickHere</h6>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
