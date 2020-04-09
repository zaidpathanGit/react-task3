import React, { Component } from 'react';
import { headerConst } from './Constants';
import '../scss/HeaderStyle.scss'
import './Globals';


class Header extends Component {

    constructor(props) {
        super(props);

        //Binding functions
        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem("Token");
        localStorage.removeItem("username");

        global.token = null;
        global.username = null;

        window.location.href = "/react-task3";
    }

    render() {
        return (
            <div className="Header">

                <img
                    style={{ display: this.props.side_menu_visibility }}
                    src={require("../asset/images/logout-icon.png")}
                    className="side-menu-icon"
                    alt={headerConst.logoutIconAltText}
                    onClick={() => this.logout()} />

                <div className="title">
                    {headerConst.appTitle}

                    <div className="sub-title">
                        {headerConst.appSubTitle}

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
