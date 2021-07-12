import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pwd: '',
            retypePwd: '',
            formErrors: {},
            use: {}
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(e);
        let name = this.state.name;
        let email = this.state.email;
        let pwd = this.state.pwd;
        let retypePwd = this.state.retypePwd;
        const errorSubmit = this.state.formErrors;
        let flag = true;

        if(!name) {
            errorSubmit.name = '* vui lòng nhập tên!';
            flag = false;
        } else {
            errorSubmit.name = '';
        }

        if(!email) {
            errorSubmit.email = '* vui lòng nhập email!';
            flag = false;
        } else {
            errorSubmit.email = '';
        }

        if(!pwd) {
            errorSubmit.pwd = '* vui lòng nhập password!';
            flag = false;
        } else if(pwd.length <= 6) {
            errorSubmit.pwd = '* mật khấu phải dài hơn 6 kí tự!';
            flag = false;
        } else {
            errorSubmit.pwd = '';
        }
        
        if(!retypePwd) {
            errorSubmit.retypePwd = '* vui lòng nhập lại password!';
            flag = false;
        } else if(retypePwd.length <=6) {
            errorSubmit.retypePwd = '* mật khấu phải dài hơn 6 kí tự!';
            flag = false;
        } else if(retypePwd === pwd) {
            errorSubmit.retypePwd = '';
        } else {
            errorSubmit.retypePwd = '* sai password!';
            flag = false;
        }
            
        if(!flag) {
            this.setState({
                formErrors: errorSubmit
            })
        } else {
            let user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.pwd
            }

            axios.post('http://localhost:3000/users', user)
            .then(res => {
                alert('Đăng kí thành công!');
                 this.props.history.push('/login')
            })
        }
    }

    render() {
        let formErrors = this.state.formErrors;
        return (
            <form className="form form__register" onSubmit={this.handleSubmit}>
                <p className="form__title">Register</p>
                <button className="form__input button__submit">Đăng kí bằng facebook</button>
                <div className="hr">
                    <hr />
                    <p>hoặc</p>
                </div>

                <p className="error">{formErrors.name}</p>
                <input 
                    className="form__input form__input--user"
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Nhập tên.." 
                    onChange={this.handleInputChange} 
                /><br /><br />

                <p className="error">{formErrors.email}</p>
                <input 
                    className="form__input form__input--user"
                    type="email" 
                    value={this.state.email} 
                    autoComplete="user-email"
                    name="email" placeholder="Nhập email.." 
                    onChange={this.handleInputChange} 
                /><br /><br />

                <p className="error">{formErrors.pwd}</p>
                <input 
                    className="form__input form__input--user"
                    type="password" 
                    value={this.state.pwd} name="pwd" 
                    autoComplete="new-password"
                    placeholder="Mật khẩu.." 
                    onChange={this.handleInputChange} 
                /><br /><br />

                <p className="error">{formErrors.retypePwd}</p>
                <input 
                    className="form__input form__input--user"
                    type="password" 
                    value={this.state.retypePwd} 
                    autoComplete="new-password"
                    name="retypePwd" 
                    placeholder="Nhập lại mật khẩu.." 
                    onChange={this.handleInputChange} 
                /><br /><br />

                <button className="form__input button__submit button__submit--pink">Đăng kí</button>
                <div className="form__support form__support--center">
                    <span>Nếu bấm đăng kí, bạn đã đồng ý với <a href="#a">chính sách</a> và <a href="#a">điều kiện sử dụng của trang.</a></span>
                </div>
            </form>
        )
    }
}

// ktr data register co trung voi data da dk truoc do kh 

