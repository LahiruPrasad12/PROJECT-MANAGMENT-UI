import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "../../../layouts/sidenav";
import "../student-dashboard/studenthome.css";
import MyChats from "./includes/MyChat";
import Chatbox from "./includes/Chatbox";
import Button from "@mui/material/Button";
import AddGroupMember from "../student-dashboard/common/AddGroupMemberForm";
import Footerdashboard from "../../../layouts/footerdashboard";

export default function Chat() {
  const [fetchAgain, setFetchAgain] = useState(false);

    return (
        <>

            {/* <Sidenav name="char"/> */}
            <div className="content">
                <div className="container">
                    <MyChats fetchAgain={fetchAgain} />
                    
                </div>

                <Footerdashboard/>
            </div>
        </>
    )
}
