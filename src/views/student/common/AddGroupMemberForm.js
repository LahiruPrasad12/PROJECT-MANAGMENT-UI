import React, { useState } from 'react';
import InfoAlert from "../../../alerts/info";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import WarningAlert from "../../../alerts/warnings";

const AddGroupMemberForm = () => {
    let [showColumns, setShowColumns] = useState(1);
    const [btnLoading, setBtnLoading] = useState(false);
    const [data, setData] = useState([{
        email: ''
    }])

    const assignGroup = async () => {
        const arr = []
        data.map(i => arr.push(i.email))

        const payload = {
            email: arr
        }
        console.log(payload)
    }

    const increment = () => {
        if (showColumns < 4) {
            setData([...data, { email: '' }])
            setShowColumns(++showColumns)
        }
    }

    const decrement = (index) => {
        const values = [...data];
        values.splice(index, 1);
        setData(values)
        setShowColumns(--showColumns)
    }

    const handleInput = (index, event) => {
        const values = [...data];
        values[index][event.target.name] = event.target.value
        setData(values)
    }
    return (
        <div className="col">
            <div style={{
                paddingTop: '3%', paddingLeft: '5%', paddingRight: '5%', marginTop: '15px',
                marginBottom: '15px'
            }}
                className="card">
                <InfoAlert message='You can group member here or later. maximum number is 4' />


                <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>Members Register</h4>
                <br />
                <form>
                    {data.map((inputField, index) => (
                        <div className="form-group" key={index}>
                            <label style={{ fontWeight: 'bold', color: '#5A5A5A' }}>Group Member {index == 0 ? '' : index} Email</label>
                            <input type="email" className="form-control" id=""
                                name="email"
                                placeholder="Enter Member Email"
                                onChange={(event) => handleInput(index, event)}
                                required />
                            <Tooltip hidden={showColumns === 1} title="UNDO MEMBERS" placement="top-start">
                                <Button onClick={() => decrement(index)}>
                                    UNDO
                                </Button>
                            </Tooltip>
                        </div>

                    ))}

                    <Tooltip title="ADD MORE MEMBERS" placement="top-start">
                        <Button onClick={() => increment()}>
                            ADD MORE
                        </Button>
                    </Tooltip>

                    <div hidden={showColumns < 4}>
                        <WarningAlert message='You can add maximum group member is 4' />
                    </div>
                    <hr />
                    <div>
                        <Button variant="contained" disabled={btnLoading} sx={{
                            float: 'right',
                            marginBottom: '10px',
                            marginLeft: '5px',
                            marginTop: '5px'
                        }} onClick={assignGroup}>
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
                <br />
            </div >

        </div >
    );
};

export default AddGroupMemberForm;