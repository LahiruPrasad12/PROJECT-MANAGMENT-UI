import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SupervisorHome from "../views/dashboard/supervisor-dashboard/supervisorHome";
import Documents from "../views/dashboard/supervisor-dashboard/supervisordocuments";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/supervisor/home">
        <SupervisorHome />
      </Route>
      <Route exact path="/supervisor/documents">
        <Documents />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
