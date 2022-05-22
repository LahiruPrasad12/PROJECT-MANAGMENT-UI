import React, {useContext, useEffect} from 'react';
import AuthContext from "../../../context/AuthContext";
import User from '../../../protected-routes/userRoute'
import jwtDecoder from 'jwt-decode'

const Student = () => {
    const { loggedIn } = useContext(AuthContext);

    useEffect(()=>{
        User.protect(loggedIn)
    })
    return (
        <div>
            Student home
        </div>
    );
};

export default Student;