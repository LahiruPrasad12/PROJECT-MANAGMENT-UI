import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenav";
import './studenthome.css';
import {Alert} from "react-bootstrap";
import Button from "@mui/material/Button";
import AuthContext from "../../../context/AuthContext";

export default function Topicregister() {
    const [show, setShow] = useState(true);
    const {loggedIn} = useContext(AuthContext);

    return (
        <>
            <Sidenav/>
            <div class="contents">
                <div class="container">
                    {/*<center>*/}
                    {/*    <h1>TOPIC REGISTER</h1>*/}
                    {/*    <p><Link to='/student/home'>Student</Link> / Topic Register</p></center>*/}
                    {/*<div style={{marginTop: '5%'}} class="row">*/}
                    {/*    <div class="col">*/}
                    {/*        <div style={{paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '3%'}}*/}
                    {/*             className="card">*/}
                    {/*            <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Register Your Topic</h4>*/}
                    {/*            <br/>*/}
                    {/*            <form>*/}
                    {/*                <div class="form-group">*/}
                    {/*                    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Topic Name</label>*/}
                    {/*                    <input type="text" class="form-control" id=""*/}
                    {/*                           placeholder="Enter Your Topic Name" required/>*/}
                    {/*                </div>*/}
                    {/*                <div class="form-group">*/}
                    {/*                    <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Document Upload</label>*/}
                    {/*                    <input style={{width: '50%'}} type="file" class="form-control" id=""*/}
                    {/*                           placeholder="Enter Your Topic Name" required/>*/}
                    {/*                </div>*/}
                    {/*                <br/>*/}
                    {/*                <center>*/}
                    {/*                    <button type="submit" class="btn btn-primary">Register Topic</button>*/}
                    {/*                </center>*/}
                    {/*            </form>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div style={{marginTop: '-12px'}}>
                        <Alert show={show} variant="success">
                            <Alert.Heading>Hey {loggedIn.name}, nice to see you</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                            </p>
                            <hr/>
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    Close me y'all!
                                </Button>
                            </div>
                        </Alert>
                    </div>



                </div>
                <Footerdashboard/>
            </div>
        </>
    )
}