import React from 'react';
import LandingPage from "../landing_page/landingPage"
import Login from "../views/auth/login"
import Register from "../views/auth/userRegister"
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const UserRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path = "/login"><Login/></Route>
            <Route exact path = "/register"><Register/></Route>
        </Router>
    );
};

export default UserRoutes;