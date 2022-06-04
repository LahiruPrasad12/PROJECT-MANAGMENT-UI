import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Admindoc from '../views/dashboard/admin-dashboard/admindoc';
import Adminhome from '../views/dashboard/admin-dashboard/adminhome';
import Allocatepm from '../views/dashboard/admin-dashboard/allocatepm';
import Submissions from '../views/dashboard/admin-dashboard/submissions';
import Submissiontype from '../views/dashboard/admin-dashboard/submissiontype';

const AdminRoutes = () => {
    return (
        <Router>
            <Route exact path="/admin/home"><Adminhome/></Route>
            <Route exact path="/admin/allocatepm"><Allocatepm/></Route>
            <Route exact path="/admin/doc"><Admindoc/></Route>
            <Route exact path="/admin/submissions"><Submissions/></Route>
            <Route exact path="/admin/submissiontype"><Submissiontype/></Route>
        </Router>
    );
};

export default AdminRoutes;