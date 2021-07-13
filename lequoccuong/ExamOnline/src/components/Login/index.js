import React, { useContext } from "react";
import { contextApp } from "../../App";
import { useForm } from "react-hook-form";
import "./style.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// validation
const schema = yup.object().shape({
  username: yup
    .string()
    .email("Email không hợp lệ")
    .required("Bạn phải nhập tên đăng nhập!"),
  password: yup.string().required("Bạn phải nhập mật khẩu!"),
});

export default function Login() {
  // context
  const contextOfApp = useContext(contextApp);

  // use history
  const history = useHistory();

  // use form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // submit form
  const onSubmit = (data) => {
    const duplicateUserName = contextOfApp.listUsers.find(
      (i) => i.username === data.username && i.password === data.password
    );
    if (duplicateUserName) {
      history.push("/");
      alert("Đăng nhập thành công");
      localStorage.setItem("user-info", JSON.stringify(duplicateUserName));
      contextOfApp.reset("login");
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  };
  return (
    <div className="wrapper-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng Nhập</h2>
        <div className="group-form">
          <Button variant="contained" color="primary" fullWidth size="large">
            ĐĂNG NHẬP BẰNG FACEBOOK
          </Button>
        </div>
        <div className=" group-form">
          <div className="login-or">
            <hr />
            <h5>hoặc</h5>
          </div>
        </div>
        <div className="group-form">
          <TextField
            id="outlined-basic"
            label="Nhập tên đăng nhập/ Email"
            variant="outlined"
            {...register("username")}
            fullWidth
          />
          <p> {errors.username?.message}</p>
        </div>
        <div className="group-form">
          <TextField
            id="outlined-basic"
            label="Nhập mật khẩu"
            variant="outlined"
            {...register("password")}
            type="password"
            fullWidth
          />
          <p> {errors.password?.message}</p>
        </div>
        <p className="forget-password">
          Quên mật khẩu? <a href="/#"> Nhấn vào đây</a>
        </p>
        <div className="group-form">
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            type="submit"
          >
            ĐĂNG NHẬP
          </Button>
        </div>
        <p className="signup">
          Nếu bạn chưa có tài khoản? <Link to="/SignUp"> Đăng ký ngay</Link>
        </p>
      </form>
    </div>
  );
}
