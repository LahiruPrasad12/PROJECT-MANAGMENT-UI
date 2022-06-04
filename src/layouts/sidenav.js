import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../views/dashboard/student-dashboard/studenthome.css";
import AuthContext from "../context/AuthContext";
import auth from "../apis/modules/auth";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from "../assets/images/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.webp";

export default function Sidenav(props) {
  const { loggedIn, loggedInGroup } = useContext(AuthContext);

  const logout = async () => {
    await auth.logout();
    localStorage.clear();
    window.location = "/login";
  };

  const moveToChat = () => {
    window.location = "/student/chat";
  };

  return (
    <>
      <div
        class="row"
        style={{ marginLeft: "0%", marginRight: "0%", marginTop: "2%" }}
      >
        <div className="col-6 col-md-2"></div>
        <div className="col-12 col-md-9">
          <div class="nav-bar">
            <div class="horz-center nav-container">
              <div class="floated left nav-div sign-div">
                <Link to="/">
                  <img
                    style={{ width: "auto", height: "55%" }}
                    src="https://i.postimg.cc/B6N12sKm/SLIIT.pnghttps://i.postimg.cc/B6N12sKm/SLIIT.png"
                  ></img>
                </Link>
              </div>
              <ul class="floated right nav-div sign-div">
                <li class="rela-inline">
                  <Link to="/profile">
                    <IconButton>
                      <Avatar alt="Remy Sharp" src="https://i.postimg.cc/fWFqYmvx/ezgif-com-gif-maker.gif" />
                    </IconButton>
                  </Link>
                </li>
                <li class="rela-inline" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar">
        <div className="sideh"></div>
        <div class="profile_info" style={{ marginTop: "-30%" }}>
          <h4>Welcome</h4>
          <h5>{loggedIn.name}</h5>
        </div>
        <div>
          <Link to="/student/home">
            <div className="menusb">
              <i class="fas fa-user-friends"></i>
              <span>Group Details</span>
            </div>
          </Link>
          <Link to="/student/topicregister">
            <div className="menusb">
              <i class="fas fa-book"></i>
              <span>Topic Register</span>
            </div>
          </Link>
          <Link to="/student/submissionst">
            <div className="menusb">
              <i class="fas fa-calendar-check"></i>
              <span>Submissions</span>
            </div>
          </Link>
          <Link to="#">
            <div onClick={moveToChat} className="menusb">
              <i class="fas fa-comment"></i>
              <span>Chat</span>
            </div>
          </Link>
          <Link to="/student/document">
            <div className="menusb">
              <ArrowDownwardIcon/>
              <span class="ml-1">Download</span>
            </div>
          </Link>
          {/*<Link to="/student/uploads">*/}
          {/*  <div className="menusb">*/}
          {/*    <i class="fas fa-cloud-upload-alt"></i>*/}
          {/*    <span>Uploads</span>*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>
      </div>
    </>
  );
}
