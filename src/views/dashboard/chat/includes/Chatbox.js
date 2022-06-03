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

        <div class="col-md-4" id="content">
            <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        </div>


    </div>
  );
};

export default Chatbox;
