import React from 'react';
import LandingPage from "../landing_page/landingPage"
import Login from "../views/auth/login"
import StudentRegister from "../views/auth/studentRegister"
import StaffRegister from "../views/auth/staffRegister"
import Test from '../test'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Profile from '../layouts/profile';

const UserRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path = "/login"><Login/></Route>
            <Route exact path = "/register"><StudentRegister/></Route>
            <Route exact path = "/staff-register"><StaffRegister/></Route>
            <Route exact path = "/profile"><Profile/></Route>
            <Route exact path = "/test"><Test/></Route>
        </Router>
    );
};

export default UserRoutes;