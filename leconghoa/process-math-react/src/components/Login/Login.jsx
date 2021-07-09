import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  function SignIn(data) {
    setError("");
    localStorage.setItem("isSignIn", JSON.stringify(data));
    history.push("/");
    props.signIn("login");
  }
  const onSubmit = (data) => {
    const user = users.filter(
      (item) =>
        (item.email === data.username && item.password === data.password) ||
        (item.numberphone === data.username && item.password === data.password)
    );
    user[0] ? SignIn(user[0]) : setError("Đăng nhập thất bại");
  };
  // console.log(errors);
  useEffect(() => {
    async function fetchUsers() {
      const requestUrl = "http://localhost:4000/users";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    }
    fetchUsers();
  }, []);
  return (
    <div className="grid wide">
      <div className="login align_center">
        <h3 className="login-title">
          Xin chào! Chúc bạn một ngày mới tốt lành
        </h3>
        <button className="btn btn-login_fb">Đăng nhập bằng facebook</button>
        <div className="login-or">
          <hr className="hr-or" />
          <span className="span-or">hoặc</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nhập Email hoặc số điện thoại"
            {...register("username", {
              required: "Vui lòng nhập tài khoản",
              maxLength: 30,
            })}
            autoComplete="off"
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
              minLength: { value: 6, message: "Mật khẩu quá ngắn" },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
          {error && <p className="error">{error}</p>}
          <p className="forget-password">
            Quên mật khẩu? <a href="/#">Nhấn vào đây</a>
          </p>
          <input type="submit" className="btn btn-submit" value="Đăng nhập" />
        </form>
        <p className="sign-up">
          Nếu bạn chưa có tài khoản?
          <Link to="/signup">&nbsp;Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
