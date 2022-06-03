import React, {useContext} from 'react';

import {
    isLastMessage,
    isSameSender,
    isSameSenderMargin,
    isSameUser,
} from "../config/ChatLogics";
import './chat.css'
import AuthContext from "../../../../context/AuthContext";

const ScrollableChat = ({messages}) => {
    const {selectedChat, setSelectedChat, user, chats, setChats} = useContext(AuthContext);

    return (
        <div>
            {messages &&
                messages.map((m, i) => (
                    <div style={{display: "flex"}} key={m._id}>
                        {(isSameSender(messages, m, i, user._id) ||
                            isLastMessage(messages, i, user._id)) && (
                            <div>
                                <div

                                />
                            </div>
                        )}
                        <span
                            style={{
                                backgroundColor: `${
                                    m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                                }`,
                                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                                borderRadius: "20px",
                                padding: "5px 15px",
                                maxWidth: "75%",
                            }}
                        >
              {m.content}
            </span>
                    </div>
                ))}
        </div>
    );
};

export default ScrollableChat;
