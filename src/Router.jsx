import React from 'react';
import LandingPage from "./landing_page/landingPage"
import Login from "./views/auth/login"
import Register from "./views/auth/userRegister"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from "./views/dashboard/Home";
import UserRoutes from './routes/userRoutes'

const Routers = () => {
    return (
       <div>
           <UserRoutes/>
       </div>
    );
};

export default Routers;