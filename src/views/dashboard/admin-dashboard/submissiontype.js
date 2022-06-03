import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenavadmin";
import '../student-dashboard/studenthome.css';

export default function Submissiontype(){

    return (
<>
<Sidenav/>
<div class="content">
<div  class="container">
<center>
    <h1>CREATE SUBMISSION</h1>
    <p><Link to='/admin/home'>Admin</Link> / <Link to='/admin/submissions'>Submissions</Link> / Create Submission</p>
</center>
  <div style={{marginTop: '5%'}} class="row">
    <div class="col">
    <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}} className="card">
    <center>
        <h4 style={{marginBottom: '30px'}}>Create Submission</h4>
    </center>
      <form>
      
       <div className="form-outline mb-4">
            <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">Submission Name</label>
            <input type="text" id="" name="" className="form-control" placeholder="Enter Submission Name" required/>
       </div>
       <div className="form-outline mb-4">
            <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">Submission Type</label>
            <input type="text" id="" name="" className="form-control" placeholder="Enter Submission Type (eg :- .pdf,.doc,.ptf)" required />
       </div>
       <div className="form-outline mb-4">
            <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">Description</label>
            <textarea className="form-control" id="" name="" rows="5" placeholder="Enter Submission Description" required></textarea >
       </div>
       <div class="row justify-content">
        <div class="col-lg-3 col-sm-6">
            <label style={{ fontWeight: 'bold', color: '#5D5D5D' }} className="form-label">Start Date</label>
            <input id="" class="form-control" type="date" required />
            <span id=""></span>
        </div>
        <div class="col-lg-3 col-sm-6">
            <label style={{ fontWeight: 'bold', color: '#5D5D5D' }}>End Date</label>
            <input id="" class="form-control" type="date" required />
            <span id=""></span>
        </div>
    </div>
    <center>
      <Link to='/admin/submissions' style={{marginTop: '6%', marginRight: '0.5%'}} type="submit" class="btn btn-dark">Return Back</Link>
      <button style={{marginTop: '6%', marginLeft: '0.5%'}} type="submit" class="btn btn-success">Add Submission</button>
      </center>
      </form>
      <br/>
    </div>
    </div>
  </div>
</div>
<Footerdashboard/>
</div>
  </>
    )
}