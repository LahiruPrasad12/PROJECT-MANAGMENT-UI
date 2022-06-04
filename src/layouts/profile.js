import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import auth from "../apis/modules/auth";
import Header from "./header";
import Footer from "./footer";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export default function Profile() {
    

    return (
        <>
        <body>
    <main>
      <Header/>
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
        
          <div class="container" style={{fontFamily: 'Montserrat', paddingTop: '0px'}}>
            <div class="rela-block profile-card" style={{height: 'auto', paddingTop: '40px', border: '0px'}}>
            <center>
                <Avatar alt="Remy Sharp" src="https://i.postimg.cc/fWFqYmvx/ezgif-com-gif-maker.gif" sx={{ width: 150, height: 150 }}/>
                </center>
                <div class="rela-block profile-name-container">
                    <div style={{fontWeight: 'bold', letterSpacing: '0', paddingTop: '10px'}} class="rela-block user-name" id="user_name">Kavindu Lakshan</div>
                    <div class="rela-block user-desc">REG-2022/14</div>
                </div>
                <center>
                <button class="btn btn-success" style={{marginRight: '0.5%'}}>Return Back</button>
                <button class="btn btn-primary" style={{marginLeft: '0.5%'}}>Edit Profile</button>
                </center>
                <div class="rela-block profile-card-stats" style={{marginTop: '5%'}}>
                <div class="floated profile-stat" style={{fontWeight: '600'}}>Email<br/><span style={{fontWeight: 'normal'}}>kavindulakshan@gmail.com</span></div>
                <div class="floated profile-stat" style={{fontWeight: '600'}}>Role<br/><span style={{fontWeight: 'normal'}}>Student</span></div>
                <div class="floated profile-stat" style={{fontWeight: '600'}}>Status<br/><span style={{fontWeight: 'normal'}}>Active</span></div>
                </div>
            </div>
              <row></row>
          </div>
    </main>
    <Footer/>
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
  </body>
        </>
    )
}