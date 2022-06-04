import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CoSupervisorHome from "../views/dashboard/co-supervisor-dashboard/co-supervisorHome";
import Documents from "../views/dashboard/co-supervisor-dashboard/cosupervisordocuments";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/cosupervisor/home">
        <CoSupervisorHome />
      </Route>
      <Route exact path="/cosupervisor/documents">
        <Documents />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
