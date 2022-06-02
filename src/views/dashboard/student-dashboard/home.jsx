import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';
import groupAPI from "../../../apis/modules/group";
import AddGroupMember from "./common/AddGroupMemberForm";
import Footerdashboard from "../../../layouts/footerdashboard";
import Button from "@mui/material/Button";

export default function Studenthome() {

    const [members, setMembers] = useState([]);
    useEffect(() => {
        const getMyGroup = async () => {
            const respond = (await groupAPI.myGroupMember()).data.data.filteredData
            console.log(respond)
            setMembers(respond)
        }
        getMyGroup()
    }, [])

    return (
        <>

            <Sidenav/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>GROUP DETAILS</h1>
                        <p>Student</p>
                        <Button className="btn btn-primary" hidden={members.length === 4} 
                        data-bs-toggle="modal" data-bs-target="#addStudent" variant="contained" disableElevation>Add
                            members</Button>
                        <div style={{marginTop: '5%'}} class="row">
                            <div class="col">
                                <table class="table">
                                    <thead class="thead-dark">
                                    <tr style={{textAlign: 'center'}}>
                                        <th scope="col">#</th>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody style={{textAlign: 'center'}}>
                                    {
                                        members.map((student, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{student.name}</td>
                                                <td>{student.email}</td>
                                            </tr>
                                        })
                                    }

                                    </tbody>
                                </table>
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                        data-dismiss="modal">Close
                                                </button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>

                        </div>
                        {/*student add model*/}

                    </center>
                </div>
                <div className="modal fade" id="addStudent" tabIndex="-1"
                     aria-labelledby="exampleModalLabel">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-body">
                                <AddGroupMember rowNumber={4 - members.length}/>
                            </div>

                        </div>
                    </div>
                </div>
                <Footerdashboard/>
            </div>
        </>
    )
}