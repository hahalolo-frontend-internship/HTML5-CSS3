import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
            errorEmail: '',
            errorPwd: '',
            errorConfirm: ''
        }

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangePwd(e) {
        this.setState({
            pwd: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault(e);

        let email = this.state.email;
        let pwd = this.state.pwd;
        let jump = true;

        if(!email) {
            jump = false;
            this.setState({errorEmail: '* vui lòng nhập email'})
        } else {
            this.setState({errorEmail: ''})
        }

        if(!pwd) {
            jump = false;
            this.setState({errorPwd: '* vui lòng nhập password'})
        } else {
            this.setState({errorPwd: ''})
        }

        if(jump) {
            let convertUserData = localStorage.getItem('dataUser');

            if(convertUserData) {
                let dataUser = JSON.parse(convertUserData);
            
                if(email !== dataUser.email || pwd !== dataUser.pwd) {
                    this.setState({errorConfirm: '* email or password sai'})
                } else {
                    alert('Đăng nhập thành công!')
                }
                
            }
          
        }
    }

    render() {
        return (
            <form id="login" onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <p>{this.state.errorConfirm}</p>
                <p>{this.state.errorEmail}</p>
                <input type="email" value={this.state.email} placeholder="Nhập email.." onChange={this.handleChangeEmail} /><br /><br />
                <p>{this.state.errorPwd}</p>
                <input type="password" value={this.state.pwd} placeholder="Mật khẩu.." onChange={this.handleChangePwd} /><br /><br />
                <input type="submit" defaultValue="Đăng nhập" />
            </form>
        )
    }
}

export default Login

// - email ''
// - pwd ''
// đã dk
// - email sai or pwd sai
// chưa dk => 
