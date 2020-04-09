import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import { loginConst } from './Constants';


class Main extends Component {

    render() {
        return (
            <Router >
                <Route exact path="/" component={Login} />
                <Route path={loginConst.homePageUrl} component={Home} />

                <Redirect to="/" />
            </Router>
        );
    }
}

export default Main;
