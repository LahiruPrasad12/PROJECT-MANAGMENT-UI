import AuthContext from "../context/AuthContext";

import {useContext} from "react";


const currentUser=()=>{
    const { loggedIn } = useContext(AuthContext);
    if(loggedIn === null){
        window.location = '/login'
    }else if(loggedIn.role === 'user'){
        window.location = '/login'
    }
}