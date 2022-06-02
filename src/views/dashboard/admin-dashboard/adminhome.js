import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Sidenavadmin from "../../../layouts/sidenavadmin";
import '../../dashboard/student-dashboard/studenthome.css';
import Footerdashboard from "../../../layouts/footerdashboard";
import admin from '../../../apis/modules/admin'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Adminhome() {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([]);
    // const [student, setStudent] = useState([]);
    // const [supervisor, setSupervisor] = useState([]);
    // const [coSupervisor, setCoSupervisor] = useState([]);
    // const [staff, setStaff] = useState([]);
    // const [panelMember, setPanelMember] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [role, setRole] = useState('')
    const [value, setValue] = React.useState(0);

    console.log(role)

    const handleChange = (event, newValue) => {
        console.log(event.target.name)
        var arr = []
        users.map((obj) => {
            return (
                obj.role === event.target.name ?
                    obj.items.map((e, index) => {
                        arr.push({ ...e, id: index })
                    }) : null
            )
        })
        setData(arr)
        setValue(newValue);
    };

    useEffect(() => {
        try {
            const getUsersData = async () => {
                var arr = []
                const respond = (await admin.getRoles()).data.data.group
                var set = respond.filter(obj => {
                    return obj.role === 'supervisor'
                })

                set.map((obj) => {
                    return (
                        obj.items.map((e, index) => {
                            arr.push({ ...e, id: index })
                        })
                    )
                })

                setData(arr)
                setUsers(respond)
            }

            getUsersData()
        } catch {
            setUsers(null)
            setData(null)
        }
    }, [])

    const deleteUser = async (id) => {
        try {
            await admin.deleteUser(id)
            window.location = "/admin/home"
        } catch {
            setShowToast(true)
        }
    }

    const updateUser = async (id) => {
        try {
            let payload = {
                staff_id: id,
                role
            }

            await admin.updateUser(payload)
            window.location = "/admin/home"
        } catch {

        }
    }

    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };


    const handleClose = () => {
        setOpen(false);
    };


    const columns = [
        { field: 'id', headerName: 'ID', headerAlign: 'center', align: "center", width: 70 },
        { field: 'name', headerName: 'Name', headerAlign: 'center', align: "center", width: 230 },
        { field: 'email', headerName: 'Email', headerAlign: 'center', align: "center", width: 300 },
        { field: 'role', headerName: 'Role', headerAlign: 'center', align: "center", width: 230 },
        {
            field: "Print",
            headerAlign: 'center',
            align: "center",
            renderCell: (cellValues) => {
                console.log(cellValues)
                return (
                    <ButtonGroup>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleModalOpen}
                            style={{ marginRight: "10px", borderRadius: "5px" }}
                        >
                            EDIT
                        </Button>
                        <Modal
                            open={openModal}
                            onClose={handleModalClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Update User Role
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <p id="child-modal-description">
                                        <div className="form-group">
                                            <form>
                                                <label style={{ fontWeight: 'bold', color: '#5A5A5A' }}>Role</label>
                                                <select className="btn btn-light dropdown-toggle" defaultValue={cellValues.row.role} onChange={(e) => setRole(e.target.value)}>
                                                    <option name="supervisor">supervisor</option>
                                                    <option name="Co-supervisor">Co-supervisor</option>
                                                    <option name="Panel-Member">Panel-Member</option>
                                                </select>
                                            </form>
                                        </div>
                                    </p>
                                    <Button
                                        onClick={() => updateUser(cellValues.row._id)}
                                        style={{ marginRight: "10px" }}>Update</Button>
                                    <Button onClick={handleModalClose}>Close</Button>
                                </Typography>
                            </Box>
                        </Modal>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleClickOpen}
                            style={{ borderRadius: "5px" }}
                        >
                            DELETE
                        </Button>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            style={{ backgroundColor: 'white' }}
                            aria-labelledby="responsive-dialog-title"
                        // BackdropProps={{ invisible: true }}
                        >
                            <DialogTitle id="responsive-dialog-title">
                                {"You are about to delete a user"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Do you really want to delete this user? This process cannot be undone
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Close
                                </Button>
                                <Button onClick={() => deleteUser(cellValues.row._id)} autoFocus>
                                    Delete
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </ButtonGroup>
                );
            },
            width: 200
        }

    ];

    const columnsStudent = [
        { field: 'id', headerName: 'ID', headerAlign: 'center', align: "center", width: 200 },
        { field: 'name', headerName: 'Name', headerAlign: 'center', align: "center", width: 300 },
        { field: 'email', headerName: 'Email', headerAlign: 'center', align: "center", width: 330 },
        { field: 'role', headerName: 'Role', headerAlign: 'center', align: "center", width: 200 },
    ];

    return (
        <>
            <Sidenavadmin />
            <div class="content">
                <div class="container">
                    <center>
                        <h1>USERS DETAILS</h1>
                        {/* <p>Admin</p> */}
                        <br />
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Supervisor" name="supervisor" {...a11yProps(0)} />
                                    <Tab label="Co-supervisor" name="Co-supervisor" {...a11yProps(1)} />
                                    <Tab label="Panel Member" name="Panel-Member" {...a11yProps(2)} />
                                    <Tab label="Staff" name="staff" {...a11yProps(3)} />
                                    <Tab label="Student" name="student" {...a11yProps(4)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                        onRowClick={() => handleRowClick}
                                        onCellClick={() => handleCellClick}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                        onRowClick={() => handleRowClick}
                                        onCellClick={() => handleCellClick}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                        onRowClick={() => handleRowClick}
                                        onCellClick={() => handleCellClick}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columns}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                        onRowClick={() => handleRowClick}
                                        onCellClick={() => handleCellClick}
                                    />
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <div style={{ height: 530, width: '100%' }}>
                                    <DataGrid
                                        rows={data}
                                        columns={columnsStudent}
                                        pageSize={8}
                                        rowsPerPageOptions={[8]}
                                        onRowClick={() => handleRowClick}
                                        onCellClick={() => handleCellClick}
                                    />
                                </div>
                            </TabPanel>
                        </Box>

                    </center>
                </div>
                <Footerdashboard />
            </div>
        </>
    )
}