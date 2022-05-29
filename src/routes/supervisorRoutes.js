import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SupervisorHome from "../views/supervisor/supervisorHome";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/supervisor/home">
        <StudentHome />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
