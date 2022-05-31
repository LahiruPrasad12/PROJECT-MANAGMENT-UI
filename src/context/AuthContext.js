
import React,{createContext, useContext, useEffect, useState} from 'react'
import auth from "../apis/modules/auth";

const AuthContext = createContext(undefined);

function AuthContextProvider(props) {
    const [loggedIn, setloggedIn] = useState({});
    const [loggedInGroup, setloggedInGroup] = useState({});

    async function getLogged(){
       try{
           const loggedInRes = await auth.currentUser();
           setloggedInGroup(loggedInRes.data.data[1]);
           setloggedIn(loggedInRes.data.data[0]);

           console.log(loggedInRes.data.data[1])
       }catch (error){
           setloggedIn(null)
       }
    }

    useEffect(() => {
        getLogged();
    }, [])

    return <AuthContext.Provider value={{loggedIn,loggedInGroup}}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider}