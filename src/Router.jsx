import React from "react";
import AdminRoutes from "./routes/adminRouters";
import AuthRoutes from "./routes/authRoutes";
import StudentRoutes from "./routes/studentRoutes";
import SupervisorRoutes from "./routes/supervisorRoutes";

const Routers = () => {
  return (
    <div>
      <AuthRoutes />
      <AdminRoutes />
      <StudentRoutes />
      <SupervisorRoutes />
    </div>
  );
};

export default Routers;
