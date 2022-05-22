import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import StudentHome from '../views/dashboard/student_dashboard/home'
import SdentHome from '../views/student/studenthome'

const AuthRoutes = () => {
    return (
        <Router>
            <Route exact path="/student/home"><StudentHome/></Route>
        </Router>
    );
};

export default AuthRoutes;