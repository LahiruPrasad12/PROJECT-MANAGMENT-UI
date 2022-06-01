import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PannelMemberHome from "../views/dashboard/pannelMember-dashboard/pannelMemberHome";

const AuthRoutes = () => {
  return (
    <Router>
      <Route exact path="/pannelmember/home">
        <PannelMemberHome />
      </Route>
    </Router>
  );
};

export default AuthRoutes;
