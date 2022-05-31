import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Sidenavadmin from "../../../layouts/sidenavadmin";
import '../student-dashboard/studenthome.css';
import Footerdashboard from "../../../layouts/footerdashboard";

export default function Adminhome() {

    return (
        <>

            <Sidenavadmin/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>USERS DETAILS</h1>
                        <p>Admin</p>
                        <div style={{marginTop: '4%'}} class="row">
                            <div class="col">
                            <form action="src/views/dashboard/admin-dashboard/adminhome#" method="get" id="searchForm" class="input-group">
                                <input type="search" class="form-control" name="search" placeholder="Search Users..." 
                                    />
                                        <select className="btn btn-light dropdown-toggle">
                                            <option>Supervisor</option>
                                            <option>Co-Supervisor</option>
                                            <option>Panel Member</option>
                                            <option>Student</option>
                                        </select>
                                <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                                </button>
                            </form>
                            <table style={{width: '90%', height: '100%', marginTop: '4%'}} class="table">
                                <thead class="thead-dark">
                                    <tr style={{textAlign: 'center'}}>
                                    <th scope="col">#</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User Type</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <br/>
                                <tbody style={{textAlign: 'center'}}>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Kavindu Lakshan</td>
                                    <td>kavindulakshan@gmail.com</td>
                                    <td>Kavindu Lakshan</td>
                                    <td>
                                    <button style={{marginRight: '2%'}} type="button" class="btn btn-secondary btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '2%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Kavindu Lakshan</td>
                                    <td>kavindulakshan@gmail.com</td>
                                    <td>Kavindu Lakshan</td>
                                    <td>
                                    <button style={{marginRight: '2%'}} type="button" class="btn btn-secondary btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '2%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Kavindu Lakshan</td>
                                    <td>kavindulakshan@gmail.com</td>
                                    <td>Kavindu Lakshan</td>
                                    <td>
                                    <button style={{marginRight: '2%'}} type="button" class="btn btn-secondary btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '2%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">4</th>
                                    <td>Kavindu Lakshan</td>
                                    <td>kavindulakshan@gmail.com</td>
                                    <td>Kavindu Lakshan</td>
                                    <td>
                                    <button style={{marginRight: '2%'}} type="button" class="btn btn-secondary btn-sm"><i class="fas fa-pen"></i></button>
                                    <button style={{marginLeft: '2%'}} type="button" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></button>
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