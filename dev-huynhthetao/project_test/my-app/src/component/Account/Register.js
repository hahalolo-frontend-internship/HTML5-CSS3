import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            pwd: '',
            retypePwd: '',
            formErrors: {}
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault(e);
        
        let name = this.state.name;
        let email = this.state.email;
        let pwd = this.state.pwd;
        let retypePwd = this.state.retypePwd;
        const errorSubmit = this.state.formErrors;
        let jump = true;
        
        if(!name) {
            errorSubmit.name = '* vui lòng nhập tên';
            jump = false;
        } else {
            errorSubmit.name = '';
        }

        if(!email) {
            errorSubmit.email = '* vui lòng nhập email';
            jump = false;
        } else {
            errorSubmit.email = '';
        }

        if(!pwd) {
            errorSubmit.pwd = '* vui lòng nhập password';
            jump = false;
        } else {
            errorSubmit.pwd = '';
        }

        if(!retypePwd) {
            errorSubmit.retypePwd = '* vui lòng nhập password';
            jump = false;
        } else if(retypePwd === pwd) {
            errorSubmit.retypePwd = '';
        } else {
            errorSubmit.retypePwd = '* sai password';
            jump = false;
        }

        if(!jump) {
            this.setState({
                formErrors: errorSubmit
            })
        } else {
            alert('Đăng kí thành công!')

            let user = {
                name: this.state.name,
                email: this.state.email,
                pwd: this.state.pwd
            }

            localStorage.setItem('dataUser', JSON.stringify(user));

        }
    
    }

    render() {
        let formErrors = this.state.formErrors;
        return (
            <form id="register" onSubmit={this.handleSubmit}>
                <h2>REGISTER</h2>
                <p>{formErrors.name}</p>
                <input type="text" value={this.state.name} name="name" placeholder="Nhập tên.." onChange={this.handleInputChange} /><br /><br />
                <p>{formErrors.email}</p>
                <input type="email" value={this.state.email} name="email" placeholder="Nhập email.." onChange={this.handleInputChange} /><br /><br />
                <p>{formErrors.pwd}</p>
                <input type="password" value={this.state.pwd} name="pwd" placeholder="Mật khẩu.." onChange={this.handleInputChange} /><br /><br />
                <p>{formErrors.retypePwd}</p>
                <input type="password" value={this.state.retypePwd} name="retypePwd" placeholder="Nhập lại mật khẩu.." onChange={this.handleInputChange} /><br /><br />
                <input type="submit" defaultValue="Đăng kí" />
            </form>
        )
    }
}

export default Register