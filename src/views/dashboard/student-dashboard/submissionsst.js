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
    <p><Link to='/student/home'>Student</Link> / Submissions</p>
    <div class="row" style={{paddingTop: '5%'}}>
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
            </div>
        </div> 
        <div class="col-md-4">
            <div class="card-counter primary" style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                <p class="numbers" style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Report Submission</p>
                <p class="name" style={{color: 'white', fontWeight: '400'}}>Deadline : 2022/10/10</p>
                <button type="button" class="btn btn-outline-light">View</button>
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