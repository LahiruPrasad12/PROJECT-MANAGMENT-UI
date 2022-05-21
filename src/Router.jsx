import React from 'react';
import AuthRoutes from './routes/authRoutes'
import StudentRoutes from './routes/studentRoutes'

const Routers = () => {
    return (
       <div>
           <AuthRoutes/>
           <StudentRoutes/>
       </div>
    );
};

export default Routers;