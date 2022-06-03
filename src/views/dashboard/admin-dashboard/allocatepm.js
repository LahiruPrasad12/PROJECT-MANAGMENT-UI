import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Sidenavadmin from "../../../layouts/sidenavadmin";
import '../student-dashboard/studenthome.css';
import Footerdashboard from "../../../layouts/footerdashboard";
import group from '../../../apis/modules/group'
import admin from '../../../apis/modules/admin'
import { DataGrid } from "@mui/x-data-grid";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function Allocatepm() {

    const [data, setData] = useState([]);
    const [options, setOptions] = useState([])

    const getAllGroups = async () => {
        try {
            var arr = []
            const respond = (await group.getAllGroups()).data.data.filteredData
            respond.map((obj, index) => {
                arr.push({ ...obj, id: index })
            })
            setData(arr)
        } catch {
            setData(null)
        }
    }

    const getOptions = async () => {
        try {
            var arr = []

            const respond = (await admin.getRoles()).data.data.group

            var set = respond.filter(obj => {
                return obj.role === 'Panel-Member'
            })

            set.map((obj) => {
                return (
                    obj.items.map((e, index) => {
                        arr.push({ ...e, id: index })
                    })
                )
            })
            setOptions(arr)
        } catch {
            setOptions(null)
        }

    }

    useEffect(() => {
        getAllGroups();
        getOptions();
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', headerAlign: 'center', align: "center", width: 70 },
        { field: 'name', headerName: 'Group Name', headerAlign: 'center', align: "center", width: 230 },
        {
            field: "Panel Member",
            headerAlign: 'center',
            align: "center",
            renderCell: (cellValues) => {
                return (
                    <select className="btn btn-light dropdown-toggle">
                        {options.map((x, index) => {
                            <option key={x.id} value={x.id}>{x.name}</option>
                        })
                        }
                    </select>
                );
            },
            width: 200
        },
    ];


    return (
        <>
            <Sidenavadmin />
            <div class="content">
                <div class="container">
                    <center>
                        <h1>ALLOCATE PANEL MEMBERS</h1>
                        <p><Link to='/admin/home'>Admin</Link> / Allocate Panel Members</p>
                        <div style={{ paddingTop: '5%' }} class="row">
                            <div class="col">
                                <form action="src/views/dashboard/admin-dashboard/allocatepm#" method="get" id="searchForm" class="input-group">
                                    <input type="search" class="form-control" name="search" placeholder="Search Groups..."
                                    />
                                    <button type="button" style={{ borderRadius: '0px' }} class="btn btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                                    </button>
                                </form>
                                {/* <table style={{ width: '90%', height: '100%', marginTop: '4%' }} class="table">
                                    <thead class="thead-dark">
                                        <tr style={{ textAlign: 'center' }}>
                                            <th scope="col">#</th>
                                            <th scope="col">Group Name</th>
                                            <th scope="col">Topic</th>
                                            <th scope="col">Allocate Panel Member</th>
                                        </tr>
                                    </thead>
                                    <br />
                                    <tbody style={{ textAlign: 'center' }}>
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
                                                <button style={{ marginLeft: '3%' }} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
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
                                                <button style={{ marginLeft: '3%' }} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
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
                                                <button style={{ marginLeft: '3%' }} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
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
                                                <button style={{ marginLeft: '3%' }} type="button" class="btn btn-success btn-sm"><i class="fas fa-sync"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                    />
                                </div>
                                <br />
                            </div>

                        </div>
                    </center>
                </div>
                <Footerdashboard />
            </div>
        </>
    )
}