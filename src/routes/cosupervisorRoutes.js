import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CoSupervisorHome from "../views/dashboard/co-supervisor-dashboard/co-supervisorHome";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/cosupervisor/home">
        <CoSupervisorHome />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
