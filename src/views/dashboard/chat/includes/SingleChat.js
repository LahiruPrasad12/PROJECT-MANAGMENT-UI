import React, {useContext} from 'react';

// import "./styles.css";
// import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import {getSender, getSenderFull} from "../config/ChatLogics";
import {useEffect, useState} from "react";
import axios from "axios";
// import { ArrowBackIcon } from "@chakra-ui/icons";

import ScrollableChat from "./ScrollableChat";
import Lottie from "react-lottie";
import chatAPI from '../../../../apis/modules/chat'
// import animationData from "../animation/typing.json";

import io from "socket.io-client";
// import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
import AuthContext from "../../../../context/AuthContext";
import './chat.css'
const ENDPOINT = "http://localhost:5000";
let socket, selectedChatCompare;


const SingleChat = ({fetchAgain, setFetchAgain}) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [socketConnected, setSocketConnected] = useState(false);
    const [typing, setTyping] = useState(false);
    const [istyping, setIsTyping] = useState(false);
    // const toast = useToast();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        // animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const {selectedChat,loggedIn, setSelectedChat, user, notification, setNotification} = useContext(AuthContext);

    const fetchMessages = async () => {
        if (!selectedChat) return;
        try {
            setLoading(true);

            const {data} = await chatAPI.fetchMessages(selectedChat._id)

            setMessages(data);
            setLoading(false);

            socket.emit("join chat", selectedChat._id);
        } catch (error) {
            alert('ok')
        }
    };

    const sendMessage = async (event) => {
        if (event.key === "Enter" && newMessage) {
            socket.emit("stop typing", selectedChat._id);
            try {

                setNewMessage("");
                const payload = {
                    content: newMessage,
                    chatId: selectedChat,
                }
                const {data} = await chatAPI.sendMessage(payload)

                socket.emit("new message", data);
                setMessages([...messages, data]);
            } catch (error) {
                alert('ok')
            }
        }
    };



    useEffect(() => {
        fetchMessages();

        selectedChatCompare = selectedChat;
        // eslint-disable-next-line
    }, [selectedChat]);




    useEffect(() => {

        function connectSocket(){
            // console.log(loggedIn)
            socket = io(ENDPOINT);
            socket.emit("setup", loggedIn);
            socket.on("connected", () => setSocketConnected(true));
            socket.on("typing", () => setIsTyping(true));
            socket.on("stop typing", () => setIsTyping(false));
        }

        connectSocket()
        socket.on("message recieved", (newMessageRecieved) => {
            if (
                !selectedChatCompare || // if chat is not selected or doesn't match current chat
                selectedChatCompare._id !== newMessageRecieved.chat._id
            ) {
                if (!notification.includes(newMessageRecieved)) {
                    setNotification([newMessageRecieved, ...notification]);
                    setFetchAgain(!fetchAgain);
                }
            } else {
                setMessages([...messages, newMessageRecieved]);
            }
        });
    });





    const typingHandler = (e) => {
        setNewMessage(e.target.value);

        if (!socketConnected) return;

        if (!typing) {
            setTyping(true);
            socket.emit("typing", selectedChat._id);
        }
        let lastTypingTime = new Date().getTime();
        const timerLength = 3000;
        setTimeout(() => {
            const timeNow = new Date().getTime();
            const timeDiff = timeNow - lastTypingTime;
            if (timeDiff >= timerLength && typing) {
                socket.emit("stop typing", selectedChat._id);
                setTyping(false);
            }
        }, timerLength);
    };

    return (
        <>
            {selectedChat ? (
                <>
                    <div class="chatContent">
                        <button

                            onClick={() => setSelectedChat("")}
                        />
                        {messages &&
                            (!selectedChat.isGroupChat ? (
                                <>
                                    {getSender(user, selectedChat.users)}
                                    <div
                                        user={getSenderFull(user, selectedChat.users)}
                                    />
                                </>
                            ) : (
                                <>
                                    {selectedChat.chatName.toUpperCase()}
                                    
                                </>
                            ))}
                    </div>
                    <div

                    >
                        {loading ? (
                            <div

                            />
                        ) : (
                            <div class="mesgs">
                            <div className="chatContent">
                                <ScrollableChat messages={messages}/>
                            </div>
        </div>
                        )}

                        <div
                            onKeyDown={sendMessage}
                            id="first-name"
                            class="input_msg_write"
                        >
                            <input type="text"
                                   class="write_msg"
                                   placeholder="Enter a message.."
                                   value={newMessage}
                                   onChange={typingHandler}
                            />
                            
                        </div>
                    </div>
                </>
            ) : (
                <div>
                </div>
            )}
        </>
    );
};

export default SingleChat;
              