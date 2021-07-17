import React, { useState, useEffect } from "react";
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import FacebookIcon from '@material-ui/icons/Facebook';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const useStyles = makeStyles({
  form: {
    margin: '50px auto',
    padding: '20px 50px',

    textAlign: 'center',
    border: 'solid 1px #d9d9d9',
    borderRadius: '8px'
  },
  button: {
    margin: '35px 0'
  },
  input: {
    marginBottom: '20px'
  },
  p: {  
    fontSize: '14px',
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    background: '#fff'
  },
  span: {
    fontSize: '13px'
  },
  a: {
    color: '#0a86d1'
  }
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
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [ dataUser, setDataUser ] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => {
        setDataUser(res.data)
    })
  }, [])

  const onSubmit = data => {
    const result = dataUser.filter(user => user.email === data.email);
    if(result.length > 0) {
      alert('Email đã được đăng kí vui lòng chọn email khác!')
    } else {
      const newData = {
        'name': data.name,
        'email': data.email,
        'password': data.pwd,
        'result': 0,
        "time": 0
      }
      
      axios.post("http://localhost:3000/users", newData)
      .then(res => {
        alert('Đăng kí thành công!');
        props.history.push('/login');
      })
    }
  }

  return (
    <Container maxWidth='sm'>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" color="textPrimary">Register</Typography>
        <Button className={classes.button} variant="contained" color="primary" endIcon={<FacebookIcon />} fullWidth>Đăng kí bằng facebook</Button>
        <Box mb={6} position="relative">
          <Typography component="hr"></Typography>
          <Typography component="p" className={classes.p}>hoặc</Typography>
        </Box>

        <TextField 
          className={classes.input} 
          label="Name" 
          variant="outlined" 
          color="primary"
          fullWidth
          autoComplete="true"
          {...register("name")}
          helperText={errors.name && errors.name.message}
          error={errors.name && true}
        />

        <TextField  
          className={classes.input} 
          label="Email" 
          variant="outlined" 
          color="primary"
          fullWidth
          autoComplete="true"
          {...register("email")}
          helperText={errors.email && errors.email.message}
          error={errors.email && true}
        />

        <TextField  
          className={classes.input} 
          type="password"
          label="Mật khẩu" 
          variant="outlined" 
          color="primary"
          fullWidth
          autoComplete="true"
          {...register("pwd")}
          helperText={errors.pwd && errors.pwd.message}
          error={errors.pwd && true}
        />

        <TextField  
          className={classes.input} 
          type="password"
          label="Mật khẩu" 
          variant="outlined" 
          color="primary"
          fullWidth
          autoComplete="true"
          {...register("confirmPwd")}
          helperText={errors.confirmPwd && errors.confirmPwd.message}
          error={errors.confirmPwd && true}
        />

        <Button className={classes.button} type="submit" variant="contained" color="secondary" fullWidth>Đăng kí</Button>
        <Box className="form__support form__support--center">
          <Typography className={classes.span} component="span">
            Nếu bấm đăng kí, bạn đã đồng ý với <Link className={classes.a} to="">chính sách</Link> và
            <Link className={classes.a} to=""> điều kiện sử dụng của trang.</Link>
          </Typography>
        </Box>
      </form>
    </Container>
  );
}