import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SupervisorHome from "../views/dashboard/supervisor-dashboard/supervisorHome";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/supervisor/home"><SupervisorHome /></Route>
    </Router>
  );
};

export default AuthRoutes;
