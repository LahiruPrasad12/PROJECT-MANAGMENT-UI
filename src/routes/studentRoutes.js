import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Home from '../views/dashboard/student-dashboard/student'

const AuthRoutes = () => {
    return (
        <Router>
            <Route exact path="/home"><Home/></Route>
        </Router>
    );
};

export default AuthRoutes;