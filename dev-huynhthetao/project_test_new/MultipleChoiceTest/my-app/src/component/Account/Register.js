import React, { useState, useEffect } from "react";
import "./Account.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  button: {
    margin: '35px 0'
  },
})

const schema = yup.object().shape({
  name: yup
  .string()
  .required("* tên không được để trống!"),

  email: yup
  .string()
  .required("* email không được để trống!")
  .email("* email không hợp lệ!"),

  pwd: yup
  .string()
  .required("* mật khẩu không được để trống!")
  .min(6, "* mật khẩu phải ít nhất 6 kí tự!")
  .max(15, "* mật khẩu không được quá 15 kí tự!"),

  confirmPwd: yup
  .string()
  .required("* mật khẩu không được để trống!")
  .oneOf([yup.ref("pwd"), null], "* sai mật khẩu!")
});

export default function Register(props) {
  const classes = useStyles();
  const [ dataUser, setDataUser ] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => {
            setDataUser(res.data)
        })
    }, [])

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    const result = dataUser.filter(user => user.email === data.email);
    if(result.length > 0) {
      alert('Email đã được đăng kí vui lòng chọn email khác!')
    } else {
      axios.post("http://localhost:3000/users", data)
      .then(res => {
        alert('Đăng kí thành công!');
        props.history.push('/login')
      })
    }
  }

  return (
    <form className="form__account" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" color="textPrimary">Register</Typography>

      <Button 
        className={classes.button} 
        variant="contained" color="primary" 
        endIcon={<FacebookIcon />} 
        fullWidth
      >
        Đăng kí bằng facebook
      </Button>

      <div className="underline">
        <hr />
        <p>hoặc</p>
      </div>

      <TextField  
        label="Name" 
        variant="outlined" 
        color="primary"
        fullWidth
        autoComplete="true"
        {...register("name")}
        helperText={errors.name && errors.name.message}
      />
      <br /><br />

      <TextField  
        label="Email" 
        variant="outlined" 
        color="primary"
        fullWidth
        autoComplete="true"
        {...register("email")}
        helperText={errors.email && errors.email.message}
      />
      <br />
      <br />

      <TextField  
        type="password"
        label="Mật khẩu" 
        variant="outlined" 
        color="primary"
        fullWidth
        autoComplete="true"
        {...register("pwd")}
        helperText={errors.pwd && errors.pwd.message}
      />
      <br />
      <br />

      <TextField  
        type="password"
        label="Mật khẩu" 
        variant="outlined" 
        color="primary"
        fullWidth
        autoComplete="true"
        {...register("confirmPwd")}
        helperText={errors.confirmPwd && errors.confirmPwd.message}
      />
      <br />
      <br />

      <Button 
        className={classes.button} 
        type="submit" 
        variant="contained" 
        color="secondary" 
        fullWidth
      >
        Đăng kí
      </Button>

      <div className="form__support form__support--center">
        <span>
          Nếu bấm đăng kí, bạn đã đồng ý với <a href="#a">chính sách</a> và
          <a href="#a"> điều kiện sử dụng của trang.</a>
        </span>
      </div>
    </form>
  );
}