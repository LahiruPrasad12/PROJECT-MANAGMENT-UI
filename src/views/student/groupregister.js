import React, {useContext} from "react";
import '../../landing_page/landingPagestyle.css';
import {Link} from 'react-router-dom';
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

export default function Groupregister(){
  

    return (
        <>
      <Header/>
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
<div  class="container">
  <center>
    <h1 style={{marginTop: '3%'}}>GROUP REGISTER</h1>
    <p>Group Register</p>
    </center>
  <div style={{marginTop: '10%'}} class="row">
    <div class="col">
        <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%'}} className="card">
      <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Group Register</h4>
      <br/><br/>
      <form>
    <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Name</label>
    <input type="text" class="form-control" id="" placeholder="Enter Your Group Name" required/>
  </div>
  <br/>
  <center>
  <button type="submit" class="btn btn-primary">Register Group</button>
  </center>
</form>
      <br/><br/>
    </div>
   
  </div>
  <div class="col">
        <div style={{paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%'}} className="card">
      <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Members Register</h4>
      <br/><br/>
      <form>
    <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 2 Email</label>
    <input type="email" class="form-control" id="" placeholder="Enter Member 2 Email" required/>
  </div>
  <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 3 Email</label>
    <input type="email" class="form-control" id="" placeholder="Enter Member 3 Email" required/>
  </div>
  <div class="form-group">
    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 4 Email</label>
    <input type="email" class="form-control" id="" placeholder="Enter Member 4 Email" required/>
  </div>
  <br/><br/>
  <center>
  <button type="submit" class="btn btn-primary">Register Members</button>
  </center>
</form>
      <br/>
    </div>
   
  </div>
</div>
</div>
<Footer/>
  </>
    )
}