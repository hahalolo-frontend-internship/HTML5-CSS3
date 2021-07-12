import React, { Component } from 'react';
import {
    Link 
} from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            dataUser: {},
            errorEmail: '',
            errorPwd: '',
            errorConfirm: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users')
        .then(res => {
            this.setState({
                dataUser: res.data
            })
        })    
    }

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePwd = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(e);
        let email = this.state.email;
        let pwd = this.state.pwd;
        let dataUser = this.state.dataUser;
        let flag = true;
        const result = dataUser.filter(user => user.email === email);

        if(result.length > 0) {
            this.setState({errorEmail: ''})
            if (!pwd) {
                this.setState({errorPwd: '* vui lòng nhập password!'})
                flag = false;
            } else if(pwd.length <= 6) {
                this.setState({errorPwd: '* password phải dài hơn 6 kí tự!'})
                flag = false;
            } else if(pwd !== result[0].password) {
                this.setState({errorPwd: '* sai password!'})
                flag = false;
            } else  {
                this.setState({errorPwd: ''})
            }
        } else {
            if(!pwd) {
                this.setState({errorPwd: '* vui lòng nhập pasword!'})
                flag = false;
            } else if(pwd.length <= 6) {
                this.setState({errorPwd: '* password phải dài hơn 6 kí tự!'})
                flag  = false;
            } else {
                this.setState({errorPwd: ''})
            }

            if(!email) {
                this.setState({errorEmail: '* vui lòng nhập email!'})
                flag = false;
            } else {
                this.setState({errorEmail: '* email chưa được đăng kí!', errorPwd: ''})
                flag = false;
            }
        }

        if(flag) {
            alert('Đăng nhập thành công!');
            localStorage.setItem('dataUser', JSON.stringify(result[0]));  
            this.props.history.push('/');  
        }

       
    }

    render() {
        return (
            <form className="form form__login" onSubmit={this.handleSubmit}>
                <p className="form__title">Login</p>
                <button className=" form__input button__submit">Đăng nhập nhanh bằng facebook</button>
                <div className="hr">
                    <hr />
                    <p>hoặc</p>
                </div>

                <p className="error">{this.state.errorConfirm}</p>
                <p className="error">{this.state.errorEmail}</p>
                <input 
                    className="form__input form__input--user"
                    type="email" 
                    value={this.state.email} 
                    autoComplete="username"
                    placeholder="Nhập email..." 
                    onChange={this.handleChangeEmail} 
                /><br /><br />

                <p className="error">{this.state.errorPwd}</p>
                <input 
                    className="form__input form__input--user"
                    type="password" 
                    value={this.state.pwd} 
                    autoComplete= "current-password"
                    placeholder="Mật khẩu.." 
                    onChange={this.handleChangePwd} 
                /><br/><br/>
                
                <div className="form__support form__support--right">
                    <span>Quên mật khẩu? <a href="#a">Nhấn vào đây</a></span>
                </div>

                <button className="form__input button__submit button__submit--pink">Đăng nhập</button>
                <div className="form__support form__support--center">
                    <span>Nếu bạn chưa có tài khoản? <Link to='/register'>Đăng kí ngay</Link></span>
                </div>
            </form>
        )
    }
}

