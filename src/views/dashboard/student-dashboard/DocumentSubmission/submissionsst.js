import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../../layouts/footerdashboard";
import Sidenav from "../../../../layouts/sidenav";
import '../studenthome.css';
import UploadDocument from './models/uploadDocument'
import UploadFinalThesis from './models/uploadFinalThesis'
import UploadPresentation from './models/persentationModel'

export default function Submissionsst() {



    return (
        <>
            <Sidenav/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>SUBMISSIONS</h1>
                        <p><Link to='/student/home'>Student</Link> / Submissions</p>
                        <div class="row" style={{paddingTop: '5%'}}>
                            <div class="col-md-4">
                                <div class="card-counter primary"
                                     style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                                    <p class="numbers"
                                       style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Document</p>
                                    <p class="name" style={{color: 'white', fontWeight: '400'}}>(Click Here to Upload File)</p>

                                        <UploadDocument/>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card-counter primary"
                                     style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                                    <p className="numbers"
                                       style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Presentation</p>
                                    <p className="name" style={{color: 'white', fontWeight: '400'}}>(Click Here to Upload File)</p>
                                    <UploadPresentation/>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-counter primary"
                                     style={{height: 'auto', width: 'auto', backgroundColor: '#4285F4'}}>
                                    <p class="numbers"
                                       style={{color: 'white', fontWeight: '600', fontSize: '22px'}}>Final Thesis</p>
                                    <p class="name" style={{color: 'white', fontWeight: '400'}}>(Click Here to Upload File)</p>
                                    <UploadFinalThesis/>
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