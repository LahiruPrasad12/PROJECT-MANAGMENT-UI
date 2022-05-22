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
import Studenthome from './views/student/studenthome';
import Documents from './views/student/documents';

const Routers = () => {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path = "/login"><Login/></Route>
            <Route exact path = "/register"><Register/></Route>
            <Route exact path = "/studenthome"><Studenthome/></Route>
            <Route exact path = "/documents"><Documents/></Route>

        </Router>
    );
};

export default Routers;