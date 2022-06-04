import React from "react";
import AdminRoutes from "./routes/adminRouters";
import AuthRoutes from "./routes/authRoutes";
import StudentRoutes from "./routes/studentRoutes";
import SupervisorRoutes from "./routes/supervisorRoutes";
import CoSupervisorRoutes from "./routes/cosupervisorRoutes";
import PannelMemberRoutes from "./routes/pannelmemberRoutes";
import Chat from "./routes/chat";

const Routers = () => {
  return (
    <div>
      <AuthRoutes />
      <AdminRoutes />
      <StudentRoutes />
      <SupervisorRoutes />
      <CoSupervisorRoutes />
      <PannelMemberRoutes />
      <Chat />
    </div>
  );
};

export default Routers;
