import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../views/dashboard/student-dashboard/studenthome.css";

export default function Sidenav() {
  return (
    <>
      <headersn>
        <label for="check"></label>
        <div class="right_area">
          <button class="logout_btn">Logout</button>
          <Link to="/">
            <button class="back_btn">Back to Home</button>
          </Link>
        </div>
      </headersn>
      <div class="mobile_nav">
        <div class="nav_bar">
          <img src="1.png" class="mobile_profile_image" alt="" />
          <i class="fa fa-bars nav_btn"></i>
        </div>
        <div class="mobile_nav_items"></div>
      </div>
      <div class="sidebar">
        <div class="profile_info">
          <img
            src="https://i.postimg.cc/fWFqYmvx/ezgif-com-gif-maker.gif"
            class="profile_image"
            alt=""
          />
          <h4>Welcome</h4>
          <h5>Kavindu Lakshan</h5>
        </div>
        <Link to="/pannelmember/home">
          <div className="menusb">
            <i class="fas fa-user-friends"></i>
            <span>Topic Submissions</span>
          </div>
        </Link>
        <Link to="">
          <div className="menusb">
            <i class="fas fa-book"></i>
            <span>Presentations</span>
          </div>
        </Link>
      </div>
    </>
  );
}
