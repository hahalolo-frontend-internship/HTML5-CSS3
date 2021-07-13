import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { contextApp } from "../../App";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./login-style.scss";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Bạn chưa nhập trường này!")
    .min(2, "Họ phải từ 3-30 ký tự")
    .max(30, "Họ phải từ 3-30 ký tự"),
  lastName: yup
    .string()
    .required("Bạn chưa nhập trường này!")
    .min(1, "Tên phải từ 3-30 ký tự")
    .max(30, "Tên phải từ 3-30 ký tự"),
  account: yup
    .string()
    .email("Email không hợp lệ")
    .required("Bạn chưa nhập trường này!"),
  password: yup
    .string()
    .required("Bạn chưa nhập trường này!")
    .min(3, "Mật khẩu phải từ 3-30 ký tự")
    .max(30, "Mật khẩu phải từ 3-30 ký tự"),
});

function Register() {
  let history = useHistory();
  const [message, setMessage] = useState(false);

  const context = useContext(contextApp);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onHandleSubmit(data, e) {
    let ramdomID = Math.random().toString(36).substring(7);
    data.id = ramdomID;

    const check = context.listAccount.some(
      (item) => item.account === data.account
    );
    if (!check) {
      e.target.reset();
      setMessage(false);

      let result = await fetch("http://localhost:3000/accounts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      context.handleReset("register");
      history.push("/");
    } else {
      setMessage(true);
    }
  }

  return (
    <div className="wrapper-login">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <h2>Đăng ký</h2>

        <div className="group-form">
          <Button 
          type="button"
          fullWidth
          variant="contained" 
          color="primary"  
          size="large"
          >ĐĂNG NHẬP BẰNG FACEBOOK</Button>
        </div>
        <div className=" group-form">
          <div className="login-or">
            <hr />
            <span>hoặc</span>
          </div>
        </div>
        <div className="group-form group-form__cover">
          <div>
            <TextField  
            id="outlined-basic" 
            type="text"
            label="Họ" 
            variant="outlined"
            {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
          </div>
          <div>
            <TextField  
            id="outlined-basic" 
            type="text"
            label="Tên" 
            fullWidth
            variant="outlined"
            {...register("lastName")} />
            <p>{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="group-form">
        <TextField  
            id="outlined-basic" 
            type="email"
            label="Email" 
            fullWidth
            variant="outlined"
            {...register("account")} />
          <p>
            {errors.account?.message
              ? errors.account?.message
              : message
              ? "Trùng tên tài khoản"
              : null}
          </p>
        </div>

        <div className="group-form">
        <TextField  
            id="outlined-basic" 
            type="password"
            label="Mật khẩu" 
            fullWidth
            variant="outlined"
            {...register("password")}/>
          <p>{errors.password?.message}</p>
        </div>

        <div className="group-form">
          <Button 
          type="submit"
          fullWidth
          variant="contained" 
          color="secondary"  
          size="large"
          >ĐĂNG KÝ</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
