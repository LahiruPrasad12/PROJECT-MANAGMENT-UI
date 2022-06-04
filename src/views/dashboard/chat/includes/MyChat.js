import React, {useContext} from 'react';


import axios from "axios";
import {useEffect, useState} from "react";
import {getSender} from "../config/ChatLogics";
import './chat.css'
import AuthContext from "../../../../context/AuthContext";
import chatAPI from '../../../../apis/modules/chat'

const MyChats = ({fetchAgain}) => {
    const [loggedUser, setLoggedUser] = useState();
    const {loggedIn, loggedInGroup} = useContext(AuthContext);

    const {selectedChat, setSelectedChat, user, chats, setChats} = useContext(AuthContext);

    const fetchChats = async () => {
        // console.log(user._id);
        try {
            const data = await chatAPI.getMyChatGroup()
            console.log(data.data)
            setChats(data.data);
        } catch (error) {
            console.log(error.message)
        }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
        // eslint-disable-next-line
    }, [fetchAgain]);

    return (
        <div>
            <div>
                <div class="row">
                    <div class="col-md-2">
                        {chats ? (
                            <div>
                                {chats.map((chat) => (
                                    <button
                                        onClick={() => setSelectedChat(chat)}
                                        key={chat._id}
                                    >
                                        <div>
                                            {!chat.isGroupChat
                                                ? getSender(loggedUser, chat.users)
                                                : chat.chatName}
                                        </div>
                                        {chat.latestMessage && (
                                            <div>
                                                <b>{chat.latestMessage.sender.name} : </b>
                                                {chat.latestMessage.content.length > 50
                                                    ? chat.latestMessage.content.substring(0, 51) + "..."
                                                    : chat.latestMessage.content}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <h1>Loading</h1>
                        )}
                    </div>
                    <div class="col-md-2">
                        <div className="vl"></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyChats;
