import React, {useContext} from 'react';
// import "./styles.css";
import SingleChat from "./SingleChat";
import './chat.css'

import AuthContext from "../../../../context/AuthContext";
import {DialogContentText} from "@mui/material";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useContext(AuthContext);

  return (
    <div>

            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />


    </div>
  );
};

export default Chatbox;
