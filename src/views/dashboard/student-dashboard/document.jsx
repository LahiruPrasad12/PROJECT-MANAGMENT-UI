import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';

export default function Documents(){

    return (
        <>
            <Sidenav/>
            <div class="content">
                <div  class="container">
                    <center>
                        <h1>DOCUMENTS</h1>
                        <p><Link to='studenthome'>Student</Link> / Documents</p>
                        <div style={{marginTop: '15%'}} class="row">
                            <div class="col">
                                <div className="card">
                                    <h4>Download Template</h4>
                                    <label style={{paddingBottom: '3%'}} class="form-label">(Click to download template)</label>
                                    <button style={{borderRadius: '0'}} type="button" class="btn btn-primary btn-lg">Download</button>
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