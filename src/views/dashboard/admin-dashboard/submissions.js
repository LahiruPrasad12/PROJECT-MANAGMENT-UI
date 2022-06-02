import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenavadmin from "../../../layouts/sidenavadmin";
import '../student-dashboard/studenthome.css';
import Footerdashboard from "../../../layouts/footerdashboard";

export default function Submissions() {

    return (
        <>

            <Sidenavadmin/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>SUBMISSIONS</h1>
                        <p><Link to='/admin/home'>Admin</Link> / Submissions</p>
                        <Link to='/admin/submissiontype' style={{marginTop: '1%'}} type="submit" class="btn btn-success">Create New Submission</Link>
                        <div style={{paddingTop: '2%'}} class="row">
                            <div class="col">
                            <table style={{width: '90%', height: '100%', marginTop: '4%'}} class="table">
                                <thead class="thead-dark">
                                    <tr style={{textAlign: 'center'}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Submission Name</th>
                                    <th scope="col">Deadline</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <br/>
                                <tbody style={{textAlign: 'center'}}>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Artificial Interligence</td>
                                    <td>2022/10/10</td>
                                    <td>
                                    <button style={{marginRight: '0.5%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '0.5%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button> 
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Artificial Interligence</td>
                                    <td>2022/10/10</td>
                                    <td>
                                    <button style={{marginRight: '0.5%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '0.5%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button> 
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Artificial Interligence</td>
                                    <td>2022/10/10</td>
                                    <td>
                                    <button style={{marginRight: '0.5%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '0.5%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button> 
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>Artificial Interligence</td>
                                    <td>2022/10/10</td>
                                    <td>
                                    <button style={{marginRight: '0.5%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '0.5%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button> 
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                                <br/>
                            </div>

                        </div>
                    </center>
                </div>
                <Footerdashboard/>
            </div>
        </>
    )
}