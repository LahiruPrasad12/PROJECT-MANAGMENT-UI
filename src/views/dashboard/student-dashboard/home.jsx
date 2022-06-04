import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';
import groupAPI from "../../../apis/modules/group";
import AddGroupMember from "./common/AddGroupMemberForm";
import Footerdashboard from "../../../layouts/footerdashboard";
import Button from "@mui/material/Button";
import Loader from '../../../loader/loader'

export default function Studenthome() {

    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const getMyGroup = async () => {
            try {
                const respond = (await groupAPI.myGroupMember()).data.data.filteredData
                console.log(respond)
                setMembers(respond)
            } catch (e) {

            }
            setLoading(false)
        }
        getMyGroup()
    }, [])

    return (
        <>

            <Sidenav/>

            {
                loading && (
                    <Loader/>
                )
            }

            {
                !loading && (
                    <div className="content">
                        <div className="container">
                            <center>
                                <h1>GROUP DETAILS</h1>
                                <p>Student</p>
                                <button className="btn btn-primary" hidden={members.length === 4} sx={{
                                    float: 'right'
                                }}
                                        data-bs-toggle="modal" data-bs-target="#addStudent" variant="contained"
                                        disableElevation>Add
                                    members</button>
                                <div style={{marginTop: '5%'}} className="row">
                                    <div className="col">
                                        <table className="table">
                                            <thead className="thead-dark">
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
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        ...
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                                data-dismiss="modal">Close
                                                        </button>
                                                        <button type="button" className="btn btn-primary">Save changes
                                                        </button>
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
                )
            }
        </>
    )
}