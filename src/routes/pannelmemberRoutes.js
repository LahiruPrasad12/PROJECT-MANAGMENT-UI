import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PannelMemberHome from "../views/dashboard/pannelMember-dashboard/pannelMemberHome";
import Presentations from "../views/dashboard/pannelMember-dashboard/presentations";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/panelmember/home">
        <PannelMemberHome />
      </Route>
      <Route exact path="/panelmember/presentationsEvaluation">
        <Presentations />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
