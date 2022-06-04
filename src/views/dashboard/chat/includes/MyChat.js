import React, { useContext } from "react";

import axios from "axios";
import { useEffect, useState } from "react";
import { getSender } from "../config/ChatLogics";
import "./chat.css";
import AuthContext from "../../../../context/AuthContext";
import chatAPI from "../../../../apis/modules/chat";
import Chatbox from "../includes/Chatbox";

const MyChats = ({ fetchAgain, setFetchAgain }) => {
    
  const [loggedUser, setLoggedUser] = useState();
  const { loggedIn, loggedInGroup } = useContext(AuthContext);

  const { selectedChat, setSelectedChat, user, chats, setChats } = useContext(
    AuthContext
  );

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const data = await chatAPI.getMyChatGroup();
      console.log(data.data);
      setChats(data.data);
    } catch (error) {
      console.log(error.message);
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
          {/* <div class="col-md-2">
                        {chats ? (
                            <div>
                                {chats.map((chat) => (
                                    <button class="btn btn-primary" style={{marginBottom: '7%', marginLeft: '1%', marginRight: '1%', backgroundColor: '#4285F4'}}
                                        onClick={() => setSelectedChat(chat)}
                                        key={chat._id}
                                    >
                                        <p>
                                            {!chat.isGroupChat
                                                ? getSender(loggedUser, chat.users)
                                                : chat.chatName}
                                        </p>
                                        {chat.latestMessage && (
                                            <div>
                                                <p>{chat.latestMessage.sender.name} : </p>
                                                {chat.latestMessage.content.length > 50
                                                    ? chat.latestMessage.content.substring(0, 10) + "..."
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
                    </div> */}
<div class="container">
          <div class="messaging">
            <div class="inbox_msg">

                
              <div class="inbox_people">
                <div class="headind_srch">
                  <div class="inbox_chat">
                    {chats ? (
                      <div>
                        {chats.map((chat) => (
                          <div
                            class="chat_list active_chat"
                            onClick={() => setSelectedChat(chat)}
                            key={chat._id}
                          >
                            <div class="chat_people">
                              <div class="chat_img">
                                {" "}
                                <img
                                  src="https://ptetutorials.com/images/user-profile.png"
                                  alt="sunil"
                                />{" "}
                              </div>
                              <div class="chat_ib">
                                <h5>
                                  {!chat.isGroupChat
                                    ? getSender(loggedUser, chat.users)
                                    : chat.chatName}{" "}
                                  <span class="chat_date">Dec 25</span>
                                </h5>
                                <p>
                                  {chat.latestMessage.content.length > 50
                                    ? chat.latestMessage.content.substring(
                                        0,
                                        100
                                      ) + "..."
                                    : chat.latestMessage.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <h1>Loading</h1>
                    )}
                  </div>
                </div>
              </div>

              <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyChats;
