import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';

export default function Topicregister(){

    return (
<>
<Sidenav/>
<div class="content">
<div  class="container">
<center>
    <h1>TOPIC REGISTER</h1>
    <p><Link to='/student/home'>Student</Link> / Topic Register</p></center>
  <div style={{marginTop: '5%'}} class="row">
    <div class="col">
    <div style={{paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}} className="card">
    <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Register Your Topic</h4>
    <br/>
      <form>
    <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Topic Name</label>
    <input type="text" class="form-control" id="" placeholder="Enter Your Topic Name" required />
  </div>        
  <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Document Upload</label>
    <input style={{width: '50%'}} type="file" class="form-control" id="" placeholder="Enter Your Topic Name" required />
  </div>
  <br/>
  <center>
  <button type="submit" class="btn btn-primary">Register Topic</button>
  </center>
</form>
    </div>
    </div>
    </div>
</div>
<Footerdashboard/>
</div>
  </>
    )
}