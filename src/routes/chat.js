import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../views/dashboard/chat/chat";
import StudentSidenav from "../layouts/sidenav";
import SupervisorSidenav from "../layouts/sidenavsupervisor";
import CoSupervisorSidenav from "../layouts/sidenavsupervisor";

const AdminRoutes = () => {
  return (
    <Router>
      <Route exact path="/student/chat">
        <StudentSidenav />
        <Chat />
      </Route>
      <Route exact path="/supervisor/chat">
        <SupervisorSidenav />
        <Chat />
      </Route>
      <Route exact path="/cosupervisor/chat">
        <CoSupervisorSidenav />
        <Chat />
      </Route>
    </Router>
  );
};

export default AdminRoutes;
