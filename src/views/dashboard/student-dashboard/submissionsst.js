import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';

export default function Submissionsst(){

    return (
<>
<Sidenav/>
<div class="content">
<div  class="container">
<center>
    <h1>SUBMISSIONS</h1>
    <p><Link to='/student/home'>Student</Link> / Documents</p>
  <div style={{marginTop: '12%'}} class="row">
    <div class="col">
    <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}} className="card">
      <h4>Download Template</h4>
      <label style={{paddingBottom: '3%'}} class="form-label">(Click to download template)</label>
      <button style={{borderRadius: '0'}} type="button" class="btn btn-primary btn-lg">Download</button>
      <br/>
    </div>
    </div>
   
  </div>
</center>
</div>
<Footerdashboard/>
</div>
  </>
    )
}