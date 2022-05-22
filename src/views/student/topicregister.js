import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenav from "../../layouts/sidenav";
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
      <form>
    <div class="form-group">
    <label style={{fontWeight: 'bold'}}>Topic Name</label>
    <input type="text" class="form-control" id="" placeholder="Enter Your Topic Name"/>
  </div>        
  <div class="form-group">
    <label style={{fontWeight: 'bold'}}>Supervisor Status</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>---</option>
      <option>Supervisor Selected</option>
      <option>Supervisor Pending</option>
    </select>
  </div>
  <div class="form-group">
    <label style={{fontWeight: 'bold'}}>Research ID</label>
    <input type="text" class="form-control" id="" placeholder="Enter Your Topic Name"/>
  </div>
  <div class="form-group">
    <label style={{fontWeight: 'bold'}}>Supervisor ID</label>
    <input type="text" class="form-control" id="" placeholder="Enter Your Topic Name"/>
  </div>
  <div class="form-group">
    <label style={{fontWeight: 'bold'}}>Document Upload</label>
    <input style={{width: '50%'}} type="file" class="form-control" id="" placeholder="Enter Your Topic Name"/>
  </div>
  <br/>
  <center>
  <button type="button" class="btn btn-primary">Register</button>
  </center>
</form>
    </div>
    </div>
</div>
</div>
  </>
    )
}