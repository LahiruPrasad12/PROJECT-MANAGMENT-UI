import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import StudentHome from '../views/dashboard/student-dashboard/home'
import Documents from '../views/dashboard/student-dashboard/documents';
import Groupregister from '../views/dashboard/student-dashboard/groupregister';
import Topicregister from '../views/dashboard/student-dashboard/topicregister';
// import SdentHome from '../views/student/studenthome'

const AuthRoutes = () => {
    return (
        <Router>
            <Route exact path="/student/groupregister"><Groupregister/></Route>
            <Route exact path="/student/home"><StudentHome/></Route>
            <Route exact path="/student/topicregister"><Topicregister/></Route>
            <Route exact path="/student/document"><Documents/></Route>
        </Router>
    );
};

export default AuthRoutes;