
import React,{createContext, useContext, useEffect, useState} from 'react'
import auth from "../apis/modules/auth";
import {useHistory} from "react-router-dom";

const AuthContext = createContext(undefined);

function AuthContextProvider(props) {
    const [selectedChat, setSelectedChat] = useState();
    const [user, setUser] = useState();
    const [notification, setNotification] = useState([]);
    const [chats, setChats] = useState();

    const [loggedIn, setloggedIn] = useState({});
    const [loggedInGroup, setloggedInGroup] = useState({});

    async function getLogged(){
       try{
           const loggedInRes = await auth.currentUser();
           setloggedInGroup(loggedInRes.data.data[1]);
           setloggedIn(loggedInRes.data.data[0]);
           setUser(loggedInRes.data.data[0])

           console.log('ava')
           console.log(loggedInRes.data.data[0])
       }catch (error){
           setloggedIn(null)
       }
    }

    useEffect(() => {
        getLogged();
    }, [])

    return <AuthContext.Provider value={{
        loggedIn,loggedInGroup,
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
    }}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider}