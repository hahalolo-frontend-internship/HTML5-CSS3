import React, { useState, useEffect } from "react";
import {
    Link
} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
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
    email: yup
    .string()
    .required("* email không được để trống!"),

    pwd: yup
    .string()
    .required("* mật khẩu không được để trống!")
});

export default function Login(props) {
    const classes = useStyles();
    const [ dataUser, setDataUser ] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => {
            setDataUser(res.data)
        })
    }, [])

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        const result = dataUser.filter(user => user.email === data.email);  
        if(result.length > 0) {
            if(data.pwd !== result[0].password) {
                alert('Sai mật khẩu!');
            } else {
                alert('Đăng nhập thành công!');
                localStorage.setItem("dataUser", JSON.stringify(data));
                props.history.push('/');
            }
        } else {
            alert('Email chưa được đăng kí!');
        }
    }

    return (
        <form className="form__account" onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" color="textPrimary">Login</Typography>
            
            <Button className={classes.button} variant="contained" color="primary" endIcon={<FacebookIcon />} fullWidth>
                Đăng nhập nhanh bằng facebook
            </Button>

            <div className="underline">
                <hr />
                <p>hoặc</p>
            </div>

            <TextField 
                label="Email" 
                variant="outlined" 
                color="primary"
                fullWidth
                autoComplete="true"
                {...register("email")}
                helperText={errors.email && errors.email.message}
            />
            <br /><br />

            <TextField 
                type="password"
                label="Mật khẩu" 
                variant="outlined" 
                color="primary"
                fullWidth
                autoComplete= "true"
                {...register("pwd")}
                helperText={errors.pwd && errors.pwd.message}
            />
            <br/><br/>

            <div className="form__support form__support--right">
                <span>Quên mật khẩu? <a href="#a">Nhấn vào đây</a></span>
            </div>
            <Button className={classes.button} type="submit" variant="contained" color="secondary" fullWidth>
                Đăng nhập
            </Button>
            <div className="form__support form__support--center">
                <span>Nếu bạn chưa có tài khoản? <Link to='/register'>Đăng kí ngay</Link></span>
            </div>
        </form>
    );
}