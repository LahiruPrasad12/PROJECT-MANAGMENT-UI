import React, {useState} from 'react';
import InfoAlert from "../../../alerts/info";
import {Tooltip} from "@mui/material";
import Button from "@mui/material/Button";
import WarningAlert from "../../../alerts/warnings";

const AddGroupMemberForm = () => {
    let [showColumns, setShowColumns] = useState(1);
    const [btnLoading, setBtnLoading] = useState(false);
    const Column = () => {
        let array = []
        for (let x = 1; x < showColumns; x++) {
            array.push(
                <div className="row form-group">
                    <div class="col-md-12">
                        <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member {x + 1} Email </label>
                        <input type="email" className="form-control" id=""
                               placeholder="Enter Member Email"
                               required/>
                    </div>

                </div>
            )
        }
        return array
    }

    const increment = () => {
        if (showColumns < 4) {
            setShowColumns(++showColumns)
        }
    }

    const decrement = () => {
        setShowColumns(--showColumns)
    }
    return (
        <div className="col">
            <div style={{
                paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', marginTop: '15px',
                marginBottom: '15px'
            }}
                 className="card">
                <InfoAlert message='You can group member here or later. maximum number is 4'/>


                <h4 style={{textAlign: 'center', fontWeight: 'bold'}}>Members Register</h4>
                <br/>
                <form>
                    <div className="form-group">
                        <label style={{fontWeight: 'bold', color: '#5A5A5A'}}>Group Member 1
                            Email</label>
                        <input type="email" className="form-control" id=""
                               placeholder="Enter Member Email"
                               required/>
                    </div>
                    <Column/>

                    <Tooltip title="ADD MORE MEMBERS" placement="top-start">
                        <Button onClick={increment}>
                            ADD MORE
                        </Button>
                    </Tooltip>
                    <Tooltip hidden={showColumns === 1} title="UNDO MEMBERS" placement="top-start">
                        <Button onClick={decrement}>
                            UNDO
                        </Button>
                    </Tooltip>
                    <div hidden={showColumns < 4}>
                        <WarningAlert message='You can add maximum group member is 4'/>
                    </div>
                    <hr/>
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
    );
};

export default AddGroupMemberForm;