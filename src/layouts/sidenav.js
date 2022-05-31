import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../views/dashboard/student-dashboard/studenthome.css';
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
            <div class="nav-bar">
    <div class="horz-center nav-container">
        <div class="floated logo" ><img style={{width: '20%', paddingTop: '2%'}} src="https://i.postimg.cc/B6N12sKm/SLIIT.pnghttps://i.postimg.cc/B6N12sKm/SLIIT.png"></img></div>

        <div class="floated right nav-div search-container">
            <div class="rela-inline icon search-icon"></div>
            <input type="text" placeholder="Search" class="rela-inline nav-search"/>
        </div>
        <ul class="floated right nav-div sign-div">
            <li class="rela-inline">Sign-Up</li>
            <li class="rela-inline">Sign-In</li>
        </ul>
        
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