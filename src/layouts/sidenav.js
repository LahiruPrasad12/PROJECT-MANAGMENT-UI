import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import '../views/student/studenthome.css';

export default function Sidenav(){

    return (
        <>
<headersn>
    <label for="check">
    </label>
    <div class="right_area">
        <button class="logout_btn">Logout</button>    
    </div>
</headersn>
<div class="mobile_nav">
    <div class="nav_bar">
        <img src="1.png" class="mobile_profile_image" alt=""/>
        <i class="fa fa-bars nav_btn"></i>
    </div>
    <div class="mobile_nav_items">
    </div>
</div>
<div class="sidebar">
    <div class="profile_info">
        <img src="https://i.postimg.cc/fWFqYmvx/ezgif-com-gif-maker.gif" class="profile_image" alt=""/>
        <h4>Welcome</h4>
        <h5>Kavindu Lakshan</h5>
    </div>
    <Link to='/studenthome'><div className="menusb"><i class="fas fa-desktop"></i><span>Dashboard</span></div></Link>
    <Link to=''><div className="menusb"><i class="fas fa-cogs"></i><span>Components</span></div></Link>
    <Link to=''><div className="menusb"><i class="fas fa-table"></i><span>Tables</span></div></Link>
    <Link to=''><div className="menusb"><i class="fas fa-th"></i><span>Forms</span></div></Link>
    <Link to=''><div className="menusb"><i class="fas fa-info-circle"></i><span>About</span></div></Link>
    <Link to='/documents'><div className="menusb"><i class="fas fa-file-alt"></i><span>Documents</span></div></Link>
</div>
  </>
    )
}