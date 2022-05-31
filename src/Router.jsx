import React from "react";
import AdminRoutes from "./routes/adminRouters";
import AuthRoutes from "./routes/authRoutes";
import StudentRoutes from "./routes/studentRoutes";
import SupervisorRoutes from "./routes/supervisorRoutes";
import CoSupervisorRoutes from "./routes/cosupervisorRoutes";

const Routers = () => {
  return (
    <div>
      <AuthRoutes />
      <AdminRoutes />
      <StudentRoutes />
      <SupervisorRoutes />
      <CoSupervisorRoutes />
    </div>
  );
};

export default Routers;
