import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Adminhome from '../views/admin/adminhome';

const AdminRoutes = () => {
    return (
        <Router>
            <Route exact path="/admin/home"><Adminhome/></Route>
        </Router>
    );
};

export default AdminRoutes;