import React from 'react';
import AdminRoutes from './routes/adminRouters';
import AuthRoutes from './routes/authRoutes'
import StudentRoutes from './routes/studentRoutes'

const Routers = () => {
    return (
       <div>
           <AuthRoutes/>
           <AdminRoutes/>
           <StudentRoutes/>
       </div>
    );
};

export default Routers;