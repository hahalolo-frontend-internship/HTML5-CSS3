import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import validate from "./validatorInfo";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container_login: {
    "background-image": "url(/yasuo.jpg)",
    "background-size": "cover",
    "min-height": "657px",
  },
  content: {
    display: "inline-block",
    background: "white",
    "border-radius": "0px 30px 30px 0px",
  },
  login_logo: {
    display: "inline-block",
    background: "white",
    "border-radius": "0px 30px 30px 0px",
    padding: "10px",
    "margin-top": "5px",
  },
  name: {
    background: "blue",
    "border-radius": "10px 10px 0 0",
    color: "white",
    padding: "10px",
    "margin-bottom": '14px',

  },
  login_form: {
    background: "white",
    border: "1px solid white",
    width: "400px",
    height: "auto",
    "min-height": "500px",
    margin: "auto",
    "margin-top": "80px",
    "margin-bottom": "50px",
    "text-align": "center",
    "box-shadow": "2px 2px 10px 3px #856f6f",
    "border-radius": "10px",
  },
  form_group: {
    padding: "5px 0",
  },
  button: {
    margin: "25px 0",
  },
}));
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

  async function handleSubmit(e) {
    e.preventDefault();
    const find = data.every((item) => item.name !== formData.name);
    if (
      find === true &&
      formData.password !== "" &&
      formData.phone !== "" &&
      formData.email !== ""
    ) {
      const result = await axios.post("http://localhost:3000/accounts", {
        name: formData.name,
        password: formData.password,
        phone: formData.phone,
        email: formData.email,
      });

      localStorage.setItem('user', JSON.stringify(result.data) )
      history.push("/main1/1");
      setFormData({ errorConfirm: "! Bạn chưa nhập or tên tồn tại" });
    } else {
      setErrors(validate(formData));
      setFormData({ errorConfirm: "* Bạn chưa nhập or tên tồn tại" });
    }
  }
  const classes = useStyles();

  return (
    <>
      <div className={classes.container_login}
      >
        <div className={classes.login_logo}>
          <Link to="/">
            <h2 className={classes.content}>Trắc nghiệm</h2>
          </Link>
        </div>
        <div className={classes.login_form}>
          <h1 className={classes.name}>Registration</h1>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={classes.form_group}>
              <TextField
                label="Nhập tài khoản"
                type="text"
                value={formData.name}
                className={classes.form_control}
                name="name"
                onChange={onChange}
                size="small"
                variant="outlined"
              />
              {errors.name && (
                <Typography color="error">{formData.errorConfirm}</Typography>
              )}
            </div>
            <div className={classes.form_group}>
              <TextField
                label="Nhập mật khẩu của bạn"
                type="password"
                value={formData.password}
                className={classes.form_control}
                name="password"
                onChange={onChange}
                size="small"
                variant="outlined"
              />
              {errors.password && (
                <Typography color="error">{errors.password}</Typography>
              )}
            </div>
            <div className={classes.form_group}>
              <TextField
                label="Nhập phone của bạn"
                type="phone"
                value={formData.phone}
                className={classes.form_control}
                name="phone"
                onChange={onChange}
                size="small"
                variant="outlined"
              />
              {errors.phone && (
                <Typography color="error">{errors.phone}</Typography>
              )}
            </div>
            <div className={classes.form_group}>
              <TextField
                label="Nhập email của bạn"
                type="email"
                value={formData.email}
                className={classes.form_control}
                name="email"
                onChange={onChange}
                size="small"
                  variant="outlined"
              />
              {errors.email && (
                <Typography color="error">{errors.email}</Typography>
              )}
            </div>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className={classes.button}
            >
              Đăng ký
            </Button>
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
