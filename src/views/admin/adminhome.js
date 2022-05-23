import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenavadmin from "../../layouts/sidenavadmin";
import '../student/studenthome.css';

export default function Adminhome(){

    return (
        <>
        
<Sidenavadmin/>
<div class="content">
<div  class="container">
<center>
    <h1>GROUP DETAILS</h1>
    <p>Student</p>
  <div style={{marginTop: '7%'}} class="row">
    <div class="col">
           
      <br/>
    </div>
   
  </div>
</center>
</div>
</div>
  </>
    )
}