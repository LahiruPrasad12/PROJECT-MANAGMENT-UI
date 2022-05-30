import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenav from "../../../layouts/sidenavadmin";
import '../student-dashboard/studenthome.css';

export default function Admindoc(){

    return (
<>
<Sidenav/>
<div class="content">
<div  class="container">
<center>
    <h1>DOCUMENTS UPLOAD</h1>
    <p><Link to='/admin/home'>Admin</Link> / Documents Upload</p>
  <div style={{marginTop: '15%'}} class="row">
    <div class="col">
    <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}} className="card">
      <h4>Upload Marking Scheme</h4>
      <form>
      <center>
      <input style={{paddingBottom: '5%', paddingTop: '5%'}}type="file" class="form-label"></input>
      </center>
      <button style={{borderRadius: '0', width: '100%'}} type="submit" class="btn btn-primary btn-lg">Upload Marking Scheme</button>
      </form>
      <br/>
    </div>
    </div>
    <div class="col">
    <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}} className="card">
      <h4>Upload Document / Template</h4>
      <form>
      <center>
      <input style={{paddingBottom: '5%', paddingTop: '5%'}}type="file" class="form-label"></input>
      </center>
      <button style={{borderRadius: '0', width: '100%'}} type="submit" class="btn btn-success btn-lg">Upload Document</button>
      </form>
      <br/>
    </div>
    </div>
  </div>
</center>
</div>
</div>
  </>
    )
}