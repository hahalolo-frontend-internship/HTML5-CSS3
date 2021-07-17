import React, { useState, useEffect } from "react";
import {
    Link
} from 'react-router-dom';
import axios from "axios";
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
    email: yup
    .string()
    .required("* email không được để trống!"),

    pwd: yup
    .string()
    .required("* mật khẩu không được để trống!")
});

export default function Login(props) {
    const classes = useStyles();
    const { register, handleSubmit, formState: { errors } } = useForm({
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
        const result = dataUser.find(user => user.email === data.email); 
        if(result) {
            if(data.pwd !== result.password) {
                alert('Sai mật khẩu!');
            } else {
                alert('Đăng nhập thành công!');
                localStorage.setItem("dataUser", JSON.stringify(result));
                props.history.push('/');
            }
        } else {
            alert('Email chưa được đăng kí!');
        }
    }

    return (
        <Container maxWidth="sm">
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" color="textPrimary">Login</Typography>
                <Button className={classes.button} variant="contained" color="primary" endIcon={<FacebookIcon />} fullWidth>Đăng nhập nhanh bằng facebook</Button>
                <Box mb={6} position="relative">
                    <Typography component="hr"></Typography>
                    <Typography component="p" className={classes.p}>hoặc</Typography>
                </Box>

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
                    autoComplete= "true"
                    {...register("pwd")}
                    helperText={errors.pwd && errors.pwd.message}
                    error={errors.pwd && true}
                />

                <Box display="flex" mt={-1.5}  justifyContent="flex-end">
                    <Typography className={classes.span} component="span">Quên mật khẩu? <Link className={classes.a} to="">Nhấn vào đây</Link></Typography>
                </Box>
                <Button className={classes.button} type="submit" variant="contained" color="secondary" fullWidth>Đăng nhập</Button>
                <Box className={classes.support} justifyContent="center">
                    <Typography className={classes.span} component="span">Nếu bạn chưa có tài khoản? <Link className={classes.a} to='/register'>Đăng kí ngay</Link></Typography>
                </Box>
            </form>
        </Container>
    );
}