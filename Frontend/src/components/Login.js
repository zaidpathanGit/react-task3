import React, { Component } from 'react';
import Header from './Header';
import Modal from './Modal';
import { post_no_auth } from '../components/Rest';
import {
    emailValidator,
    lengthValidator,
    cpasswordValidator
} from '../components/Validator';
import '../scss/LoginStyle.scss';
import { loginConst, systemMsg } from './Constants';
import Loader from './Loader';
import './Globals';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            isRegActive: false,
            errormsg: null,
            modalVisibility: "none",
            loaderVisibility: "none",
        }

        //Binding functions
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.reg = this.reg.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("Token") != null) {
            window.location.href = loginConst.homePageRedirectUrl;
        }
    }

    //Function to handle login and registration of user
    handleSubmit(e) {

        try {
            e.preventDefault();

            this.setState({ loaderVisibility: null });

            if (this.state.isRegActive) {

                let formData = new FormData();
                formData.append('username', e.target[0].value);
                formData.append('password', e.target[1].value);
                formData.append('email', e.target[2].value);

                this.reg(formData);
            }
            else {
                let formData = new FormData();
                formData.append('username', e.target[0].value);
                formData.append('password', e.target[1].value);

                this.login(formData, e.target[0].value);
            }

            this.refs.form.reset();

        } catch (error) {
            alert(systemMsg.internalError);
        }
    }

    //Function to handle login of user
    login(formData, username) {
        try {

            post_no_auth("login", formData)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                            .then((res) => {

                                localStorage.setItem("Token", res.token);
                                localStorage.setItem("username", username);

                                if (localStorage.getItem("Token") !== null  &&
                                    localStorage.getItem("username") !== null ) {

                                    global.token = res.token;
                                    global.username = username;
                                }

                                window.location.href = loginConst.homePageRedirectUrl;
                            })
                    }
                    else {
                        return response.json()
                            .then((res) => {
                                this.setState({ errormsg: res.msg, modalVisibility: null, loaderVisibility: "none" })
                            })
                    }
                })
                .catch((error) => {

                    this.setState({ errormsg: systemMsg.internalError, modalVisibility: null, loaderVisibility: "none" });
                });

        } catch (error) {

            this.setState({ errormsg: systemMsg.internalError, modalVisibility: null, loaderVisibility: "none" });
        }
    }

    //Function to handle registration of user
    reg(formData) {
        try {

            post_no_auth("reg", formData)
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                            .then((res) => {
                                this.setState({ errormsg: res.msg, modalVisibility: null, loaderVisibility: "none" })
                            })
                    }
                    else {
                        return response.json()
                            .then((res) => {
                                this.setState({ errormsg: res.msg, modalVisibility: null, loaderVisibility: "none" })
                            })
                    }
                })
                .catch((error) => {
                    this.setState({ errormsg: systemMsg.internalError, loaderVisibility: "none" });
                });

        } catch (error) {
            this.setState({ errormsg: systemMsg.internalError, loaderVisibility: "none" });
        }
    }

    render() {
        return (
            <>
                <Header side_menu_visibility="none" />
                <br /><br /> <hr />

                <div className="outer-div popup">
                    Welcome to {this.state.isRegActive ? loginConst.textReg : loginConst.textLogin}

                    <form onSubmit={(e) => this.handleSubmit(e)} ref="form">

                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username*"
                                required="required"
                                className="form-control"
                                onKeyUp={(e) =>
                                    lengthValidator(
                                        e.target.value,
                                        "Username",
                                        this.refs.username
                                    )
                                }
                            />

                            <div ref="username" className="error-text"></div>
                        </div>

                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password*"
                                required="required"
                                className="form-control"
                                ref="pass"
                                autoComplete="autoComplete"
                                onKeyUp={(e) =>
                                    lengthValidator(
                                        e.target.value,
                                        "Password",
                                        this.refs.password
                                    )
                                }
                            />

                            <div ref="password" className="error-text"></div>
                        </div>

                        {this.state.isRegActive ?
                            <>
                                <div>
                                    <input
                                        type="password"
                                        name="cpassword"
                                        placeholder="Confirm Password*"
                                        className="form-control"
                                        required="required"
                                        autoComplete="autoComplete"
                                        onKeyUp={(e) => {
                                            cpasswordValidator(
                                                this.refs.pass.value,
                                                e.target.value,
                                                "Confirm Password",
                                                this.refs.cpassword
                                            );
                                        }}
                                    />

                                    <div ref="cpassword" className="error-text"></div>
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        className="form-control"
                                        required="required"
                                        onKeyUp={(e) => {
                                            emailValidator(
                                                e.target.value,
                                                "Email",
                                                this.refs.email
                                            );
                                        }}
                                    />

                                    <div ref="email" className="error-text"></div>
                                </div>
                            </>
                            :
                            null
                        }

                        <div>
                            <input
                                type="submit"
                                value={this.state.isRegActive ? loginConst.textReg : loginConst.textLogin}
                                className="btn-primary" />

                            <input
                                type="reset"
                                className="btn-regular"
                            />

                        </div>
                        <div>
                            <font
                                onClick={() =>
                                    this.state.isRegActive ?
                                        this.setState({ isRegActive: false, }) :
                                        this.setState({ isRegActive: true })}
                            >
                                <br />
                                <u> OR
                                    {this.state.isRegActive ?
                                        loginConst.textLogin.toUpperCase() :
                                        loginConst.textReg.toUpperCase()
                                    }
                                    NOW..! </u>
                            </font>

                        </div>

                        <Loader visibility={this.state.loaderVisibility} />
                    </form>

                    <Modal
                        title="Info"
                        content={this.state.errormsg}
                        visibility={this.state.modalVisibility}
                        onClose={() => this.setState({ modalVisibility: "none" })}
                    />
                </div>
            </>
        );
    }
}

export default Login;
