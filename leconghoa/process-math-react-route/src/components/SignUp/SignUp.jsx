import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "../Login/Login.scss";
export default function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [error, setError] = useState();
  const [confirm, setConfirm] = useState();
  const [users, setUsers] = useState();

  function checkRegister(email, phone) {
    let result;
    users.filter((item) => item.numberphone === phone || item.email === email)
      .length === 0
      ? (result = true)
      : (result = false);
    return result;
  }

  async function onSubmit(data) {
    if (confirm === data.password) {
      if (checkRegister(data.email, data.numberphone)) {
        setError("");
        await fetch("http://localhost:5000/users", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        localStorage.setItem("isSignIn", JSON.stringify(data));
        history.push("/");
        props.signIn("register");
      } else setError("Đăng ký thất bại");
    } else {
      setError("Sai mật khẩu");
      return;
    }
  }
  useEffect(() => {
    async function fetchUsers() {
      const requestUrl = "http://localhost:5000/users";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setUsers(responseJSON);
    }
    fetchUsers();
  }, []);
  // console.log(errors);
  function handleConfirm(e) {
    setConfirm(e.target.value);
  }
  return (
    <div className="grid wide">
      <div className="login align_center">
        <h3 className="login-title">Đăng ký miễn phí</h3>
        <button className="btn btn-login_fb">
          Đăng ký bằng facebook (Khuyến khích)
        </button>
        <div className="login-or">
          <hr className="hr-or" />
          <span className="span-or">hoặc đăng ký mới</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fullname">
            <input
              type="text"
              placeholder="Họ"
              {...register("firstname", {
                required: "Họ không được để trống",
                maxLength: 15,
              })}
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Tên"
              {...register("lastname", {
                required: "Tên không được để trống",
                maxLength: 30,
              })}
              autoComplete="off"
            />
          </div>
          <div className="error_name">
            {errors.firstname && (
              <p className="error">{errors.firstname.message}</p>
            )}
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </div>
          <input
            type="number"
            placeholder="Số điện thoại"
            {...register("numberphone", {
              required: "Vui lòng nhập số điện thoại",
              maxLength: {
                value: 11,
                message: "Vui lòng kiểm tra lại só điện thoại",
              },
              minLength: {
                value: 10,
                message: "Vui lòng kiểm tra lại só điện thoại",
              },
            })}
            autoComplete="off"
          />
          {errors.numberphone && (
            <p className="error">{errors.numberphone.message}</p>
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: "Không nhập ký tự đặc biệt",
              },
            })}
            autoComplete="off"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
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
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            name="rppassword"
            onChange={(e) => handleConfirm(e)}
          />
          {error && <p className="error">{error}</p>}
          <input type="submit" className="btn btn-submit" value="Đăng ký" />
        </form>
        <p className="policy">
          Khi bấm Đăng ký, bạn đã đồng ý với <a href="/#">chính sách</a> và
          <a href="/#"> điều kiện sử dụng</a> của tracnghiem.net
        </p>
      </div>
    </div>
  );
}
