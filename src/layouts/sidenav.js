import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../views/student/studenthome.css';
import AuthContext from "../context/AuthContext";
import auth from "../apis/modules/auth";

export default function Sidenav() {
    const { loggedIn } = useContext(AuthContext);

    const logout = async () => {
        await auth.logout();
        localStorage.clear();
        window.location = '/login'
    }

    return (
        <>
            <headersn>
                <label for="check">
                </label>
                <div class="right_area">
                    <Link to="/login"><button class="logout_btn" onClick={logout}>Logout</button></Link>
                    <Link to='/'><button class="back_btn">Back to Home</button></Link>
                </div>
            </headersn>
            <div class="mobile_nav">
                <div class="nav_bar">
                    <img src="1.png" class="mobile_profile_image" alt="" />
                    <i class="fa fa-bars nav_btn"></i>
                </div>
                <div class="mobile_nav_items">
                </div>
            </div>
            <div class="sidebar">
                <div class="profile_info">
                    <img src="https://i.postimg.cc/fWFqYmvx/ezgif-com-gif-maker.gif" class="profile_image" alt="" />
                    <h4>Welcome</h4>
                    <h5>{loggedIn.name}</h5>
                </div>
                <Link to='/student/home'><div className="menusb"><i class="fas fa-user-friends"></i><span>Group Details</span></div></Link>
                <Link to='/student/topicregister'><div className="menusb"><i class="fas fa-book"></i><span>Topic Register</span></div></Link>
                <Link to=''><div className="menusb"><i class="fas fa-table"></i><span>Supervisor</span></div></Link>
                <Link to=''><div className="menusb"><i class="fas fa-th"></i><span>Co-Supervisor</span></div></Link>
                <Link to='/student/document'><div className="menusb"><i class="fas fa-file-alt"></i><span>Documents</span></div></Link>
            </div>
        </>
    )
}