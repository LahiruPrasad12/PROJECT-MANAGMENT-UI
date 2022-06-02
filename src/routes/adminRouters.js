import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Admindoc from '../views/dashboard/admin-dashboard/admindoc';
import Adminhome from '../views/dashboard/admin-dashboard/adminhome';
import Allocatepm from '../views/dashboard/admin-dashboard/allocatepm';

const AdminRoutes = () => {
    return (
        <Router>
            <Route exact path="/admin/home"><Adminhome/></Route>
            <Route exact path="/admin/allocatepm"><Allocatepm/></Route>
            <Route exact path="/admin/doc"><Admindoc/></Route>
        </Router>
    );
};

export default AdminRoutes;