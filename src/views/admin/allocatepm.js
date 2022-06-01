import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenavadmin from "../../layouts/sidenavadmin";
import '../dashboard/student-dashboard/studenthome.css';
import Footerdashboard from "../../layouts/footerdashboard";

export default function Allocatepm() {

    return (
        <>

            <Sidenavadmin/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>ALLOCATE PANEL MEMBERS</h1>
                        <p><Link to='/admin/home'>Admin</Link> / Allocate Panel Members</p>
                        <div style={{paddingTop: '5%'}} class="row">
                            <div class="col">
                            <form action="#" method="get" id="searchForm" class="input-group">
                                <input type="search" class="form-control" name="search" placeholder="Search Groups..." 
                                    />
                                <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                                </button>
                            </form>
                            <table style={{width: '90%', height: '100%', marginTop: '4%'}} class="table">
                                <thead class="thead-dark">
                                    <tr style={{textAlign: 'center'}}>
                                    <th scope="col">#</th>
                                    <th scope="col">Group Name</th>
                                    <th scope="col">Topic</th>
                                    <th scope="col">Allocate Panel Member</th>
                                    </tr>
                                </thead>
                                <br/>
                                <tbody style={{textAlign: 'center'}}>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>REG 2022/14</td>
                                    <td>Artificial Interligence</td>
                                    <td>
                                        <select className="btn btn-light dropdown-toggle">
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                        </select>
                                    <button style={{marginLeft: '3%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>REG 2022/14</td>
                                    <td>Artificial Interligence</td>
                                    <td>
                                        <select className="btn btn-light dropdown-toggle">
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                        </select>
                                    <button style={{marginLeft: '3%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>REG 2022/14</td>
                                    <td>Artificial Interligence</td>
                                    <td>
                                        <select className="btn btn-light dropdown-toggle">
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                        </select>
                                    <button style={{marginLeft: '3%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>REG 2022/14</td>
                                    <td>Artificial Interligence</td>
                                    <td>
                                        <select className="btn btn-light dropdown-toggle">
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                            <option>Kavindu Lakshan</option>
                                        </select>
                                    <button style={{marginLeft: '3%'}} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
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