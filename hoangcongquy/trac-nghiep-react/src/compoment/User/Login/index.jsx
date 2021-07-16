import React, { useState, useEffect } from "react";
import axios from "axios";
import validate from "../Login/validatorLogin";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
  ,
  container_login: {
    "background-image": "url(/yasuo.jpg)",
    "background-size": "cover",
    'min-height': '657px',
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
    'margin-top': '5px',
  },
  name :{
    background: 'blue',
    'border-radius': '10px 10px 0 0',
    'margin-bottom': '40px',
    color: 'white',
    padding: "10px"
  }
  ,
  login_form: {
    background: "white",
    border: "1px solid white",
    width: "400px",
    height: "auto",
    "min-height": "405px",
    margin: "auto",
    "margin-top": "80px",
    "margin-bottom": "50px",
    "text-align": "center",
    "box-shadow": "2px 2px 10px 3px #856f6f",
    "border-radius": "10px",
  },
  form_group:{
    padding: "10px 0" ,
  },
  button:{
    margin: '25px 0'
  }
}));

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
      if (
        find &&
        find.password === formData.password &&
        formData.password !== "" &&
        formData.name !== ""
      ) {
        localStorage.setItem("user", JSON.stringify(formData));
        console.log(formData)
        history.push("/main1/1", blog);
        setBlog(false);
      }
    }
    setErrors(validate(formData));
  }

  const classes = useStyles();

  return (
    <>
      <div className={classes.container_login}>
        <div className={classes.login_logo}>
          <Link to="/">
            <h2 className={classes.content}>Trắc nghiệm</h2>
          </Link>
        </div>
        <div className={classes.login_form}>
          <h1 className={classes.name}>LOGIN</h1>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={classes.form_group}>
              <TextField
                label="Nhập tài khoản của bạn"
                type="text"
                value={formData.name}
                className={classes.form_control}
                name="name"
                onChange={onChange}
                variant="outlined"
                size="small"
                helperText={errors.name}
                error={!!errors.name}
              />
            </div>
            <div className={classes.form_group}>
              <TextField
                label="Nhập mật khẩu của bạn"
                type="password"
                value={formData.password}
                className={classes.form_control}
                name="password"
                onChange={onChange}
                variant="outlined"
                size="small"
                helperText={errors.password}
                error={!!errors.password}
              />
              {/* {errors.password && <Typography color="error">{errors.password}</Typography>} */}
            </div>
            <Button variant="contained" color="secondary" type="submit" className={classes.button}>
              Đăng nhập
            </Button>
            <Link to="/Registration" >
              <h6>Forgot Resgistration? ClickHere</h6>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
