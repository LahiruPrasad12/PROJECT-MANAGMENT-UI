import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Sidenavadmin from "../../layouts/sidenavadmin";
import '../dashboard/student-dashboard/studenthome.css';
import Footerdashboard from "../../layouts/footerdashboard";
import admin from '../../apis/modules/admin'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function Adminhome() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        try {
            const getUsersData = async () => {
                const respond = await (await admin.getUsers()).data.data.filteredData
                const newArr = []
                respond.map((obj, index) => {
                    newArr.push({ ...obj, id: index })
                })
                setUsers(newArr)
            }
            getUsersData()
        } catch {
            setUsers(null)
        }
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 230 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'role', headerName: 'Role', width: 150 },
        { field: 'active', headerName: 'Active', width: 90 },
        { field: 'action', headerName: 'Action', width: 150 },

    ];

    return (
        <>
            <Sidenavadmin />
            <div class="content">
                <div class="container">
                    <center>
                        <h1>USERS DETAILS</h1>
                        <p>Admin</p>
                        <div style={{ height: 530, width: '100%' }}>
                            <DataGrid
                                rows={users}
                                columns={columns}
                                pageSize={8}
                                rowsPerPageOptions={[8]}
                                checkboxSelection
                            />
                        </div>
                    </center>
                </div>
                <Footerdashboard />
            </div>
        </>
    )
}