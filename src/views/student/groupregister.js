import React, {useContext, useState} from "react";
import '../../landing_page/landingPagestyle.css';
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import {Alert} from "react-bootstrap";
import Button from "@mui/material/Button";
import studentAPI from '../../apis/modules/student'
import AuthContext from "../../context/AuthContext";
import WarningAlert from '../../alerts/warnings'

export default function GroupRegister() {
    const [show, setShow] = useState(true);
    const [memberRegisterState, setMemberRegisterState] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [name, setName] = useState('');
    const { loggedIn } = useContext(AuthContext);

    const createGroup = async () => {
        try {
            let payload = {
                name
            }
            setBtnLoading(true)
            const respond = await studentAPI.createGroup(payload)
            setMemberRegisterState(false)
            setBtnLoading(false)
        } catch (e) {

        }
    }


    return (
        <>
            <Header/>
            <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape"/>
            <div class="container">
                <div>
                    <Alert show={show} variant="success">
                        <Alert.Heading>Hey {loggedIn.name}!</Alert.Heading>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me y'all!
                            </Button>
                        </div>
                    </Alert>

                    <Button hidden={show} data-bs-toggle="modal" data-bs-target="#createGroup" variant="contained"
                            sx={{
                                float: 'right',
                                marginTop:'-120px'
                            }} disableElevation>
                        Create a new group
                    </Button>
                    <Button hidden={!show} data-bs-toggle="modal" data-bs-target="#createGroup" variant="contained"
                            sx={{
                                float: 'right',
                            }} disableElevation>
                        Create a new group
                    </Button>
                </div>
                <div style={{marginTop: '10%'}} class="row">


                </div>
            </div>

            {/*group create model*/}
            <div className="modal fade" id="createGroup" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="col">
                                <div style={{
                                    paddingTop: '3%',
                                    paddingLeft: '5%',
                                    paddingRight: '5%',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }} className="card">
                                    <WarningAlert message='This group name will not be changes'/>
                                    <h4 style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: '5%',
                                        marginBottom: '2%'
                                    }}>Group Register</h4>
                                    <form>
                                        <div className="form-group">
                                            <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Name</label>
                                            <input type="text" className="form-control" id=""
                                                   placeholder="Enter Your Group Name"
                                                   required onChange={(e)=>{setName(e.target.value)}}/>
                                        </div>
                                        <div>
                                            <Button variant="contained" disabled={btnLoading || name.length===0} sx={{
                                                float: 'right',
                                                marginBottom: '10px',
                                                marginLeft: '5px',
                                                marginTop: '5px'
                                            }} className='aa' data-bs-toggle="modal" data-bs-target="#addStudent"
                                                    onClick={createGroup}>
                                                {btnLoading ? 'Registering...' : 'next'}
                                            </Button>
                                            <Button variant="contained" className="btn btn-secondary"
                                                    data-bs-dismiss="modal" sx={{
                                                float: 'right',
                                                marginBottom: '10px',
                                                marginTop: '5px'

                                            }}>
                                                close
                                            </Button>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*student add model*/}
            <div hidden={memberRegisterState} className="modal fade" id="addStudent" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="col">
                                <div style={{
                                    paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', marginTop: '15px',
                                    marginBottom: '15px'
                                }}
                                     className="card">
                                    <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Members Register</h4>
                                    <br/><br/>
                                    <form>
                                        <div className="form-group">
                                            <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 2
                                                Email</label>
                                            <input type="email" className="form-control" id=""
                                                   placeholder="Enter Member 2 Email"
                                                   required/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 3
                                                Email</label>
                                            <input type="email" className="form-control" id=""
                                                   placeholder="Enter Member 3 Email"
                                                   required/>
                                        </div>
                                        <div className="form-group">
                                            <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 4
                                                Email</label>
                                            <input type="email" className="form-control" id=""
                                                   placeholder="Enter Member 4 Email"
                                                   required/>
                                        </div>
                                        <div>
                                            <Button variant="contained" disabled={btnLoading} sx={{
                                                float: 'right',
                                                marginBottom: '10px',
                                                marginLeft: '5px',
                                                marginTop: '5px'
                                            }}>
                                                {btnLoading ? 'Registering...' : 'ADD MEMBERS'}
                                            </Button>
                                            <Button variant="contained" className="btn btn-secondary"
                                                    data-bs-dismiss="modal" sx={{
                                                float: 'right',
                                                marginBottom: '10px',
                                                marginTop: '5px'

                                            }} onClick={(e) => {
                                                window.location = '/student/home'
                                            }}>
                                                Skip
                                            </Button>

                                        </div>
                                    </form>
                                    <br/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}