import React from 'react';
import LandingPage from "./landing_page/landingPage"
import Login from "./views/auth/login"
import Register from "./views/auth/register"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./views/dashboard/Home";

const Routers = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path = "/login"><Login/></Route>
            <Route exact path = "/register"><Register/></Route>

            <Route exact path = "/home"><Home/></Route>

        </Router>
    );
};

export default Routers;