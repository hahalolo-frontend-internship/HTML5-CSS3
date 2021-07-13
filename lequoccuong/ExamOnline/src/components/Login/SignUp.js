import { useForm } from "react-hook-form";
import "./style.scss";
import { useHistory } from "react-router";
import { v4 } from "uuid";
import { contextApp } from "../../App";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";

// validation
const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Bạn phải nhập họ!")
    .min(3, "Họ phải từ 3-30 ký tự")
    .max(30, "Họ phải từ 3-30 ký tự"),
  lastname: yup
    .string()
    .required("Bạn phải nhập tên!")
    .min(3, "Tên phải từ 3-30 ký tự")
    .max(30, "Tên phải từ 3-30 ký tự"),
  username: yup
    .string()
    .email("Email không hợp lệ")
    .required("Bạn phải nhập tên đăng nhập!"),
  password: yup
    .string()
    .required("Bạn chưa nhập trường này!")
    .min(3, "Mật khẩu phải từ 3-30 ký tự")
    .max(30, "Mật khẩu phải từ 3-30 ký tự"),
});

export default function SignUp() {
  // list context
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
  const onSubmit = async (data) => {
    if (!contextOfApp.listUsers.find((i) => i.username === data.username)) {
      data.id = v4();
      let result = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      contextOfApp.reset(data);
      history.push("/");
    } else {
      alert("Tên đăng nhập bị trùng");
    }
  };
  return (
    <div className="wrapper-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Đăng Ký</h2>
        <div className="group-form">
          <Button variant="contained" color="primary" fullWidth size="large">
            ĐĂNG KÝ BẰNG FACEBOOK
          </Button>
        </div>
        <div className=" group-form">
          <div className="login-or">
            <hr />
            <h5>hoặc</h5>
          </div>
        </div>
        <div className="group-form">
          <div className="firstname">
            <TextField
              id="outlined-basic"
              label="Họ"
              variant="outlined"
              {...register("firstname")}
              fullWidth
            />
            <p>{errors.firstname?.message}</p>
          </div>
          <div className="lastname">
            <TextField
              id="outlined-basic"
              label="Tên"
              variant="outlined"
              {...register("lastname")}
              fullWidth
            />
            <p className="placeholer-name">{errors.lastname?.message}</p>
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
          <p>{errors.username?.message}</p>
        </div>
        <div className="group-form">
          <TextField
            id="outlined-basic"
            label="Nhập mật khẩu"
            variant="outlined"
            {...register("password")}
            fullWidth
            type="password"
          />
          <p>{errors.password?.message}</p>
        </div>
        <div className="group-form">
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
            type="submit"
          >
            ĐĂNG KÝ NGAY
          </Button>
        </div>
        <p className="signup">
          Khi bấm Đăng ký, bạn đã đồng ý với <a href="/#">chính sách</a> của
          tracnghiem.vn <a href="/#"> điều kiện sử dụng </a>
        </p>
      </form>
    </div>
  );
}
