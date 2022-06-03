import React from 'react';
import {
    BrowserRouter as Router, Route,
} from "react-router-dom";
import Chat from '../views/dashboard/chat/chat';


const AdminRoutes = () => {
    return (
        <Router>
            <Route exact path="/chat"><Chat/></Route>
        </Router>
    );
};

export default AdminRoutes;