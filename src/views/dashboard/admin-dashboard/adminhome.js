import React, { useState, useEffect } from "react";
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
import SoloAlert from 'soloalert';

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
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [role, setRole] = useState('')
    const [value, setValue] = React.useState(0);

    const [studentCount, setStudentCount] = React.useState(0);
    const [adminCount, setAdminCount] = React.useState(1);
    const [coSupervisorCount, setCoSupervisorsCount] = React.useState(0);
    const [staffCount, setStaffCount] = React.useState(0);
    let [panelCount, setPanelCount] = React.useState(0);
    const [supervisorCount, setSupervisorCount] = React.useState(0);
    const [userId, setUserId] = React.useState('');
    let [all, setAll] = React.useState(0);

    const handleChange = (event, newValue) => {
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

    const getRole = (respond, name) => {
        var set = respond.filter(obj => {
            return obj.role === name
        })

        return set;
    }

    useEffect(() => {
        try {
            const getUsersData = async () => {
                var arr = []
                const respond = (await admin.getRoles()).data.data.group
                console.log('ava')
                console.log(respond)
                let total = 0;
                respond.map((element) => {
                    total = total + element.items.length


                    if (element.role === 'Panel-Member') {
                        setPanelCount(element.items.length)
                    } else if (element.role === 'supervisor') {
                        setSupervisorCount(element.items.length)
                    } else if (element.role === 'Co-supervisor') {
                        setCoSupervisorsCount(element.items.length)
                    } else if (element.role === 'student') {
                        setStudentCount(element.items.length)
                    } else if (element.role === 'staff') {
                        setStaffCount(element.items.length)
                    }

                })

                setAll(total)

                var supervisor = getRole(respond, 'supervisor')

                supervisor.map((obj) => {
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

    const deleteUser = async () => {
        try {
            await admin.deleteUser(userId)

            SoloAlert.alert({
                title: "Success",
                body: "User Deleted successfully",
                icon: "success",
                theme: "dark",
                onOk: function () {
                    window.location = "/admin/home"
                }
            });
        } catch {
        }
    }

    const updateUser = async (id) => {
        try {
            let payload = {
                staff_id: userId,
                role
            }

            await admin.updateUser(payload)
            SoloAlert.alert({
                title: "Success",
                body: "User updated successfully",
                icon: "success",
                theme: "dark",
                onOk: function () {
                    window.location = "/admin/home"
                }
            });
        } catch {
            SoloAlert.alert({
                title: "Error",
                body: "Sorry! User update Failed",
                icon: "error",
                theme: "dark",
                onOk: function () {
                    window.location = "/admin/home"
                }
            });
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleModalOpen = () => {
        setOpenModal(true);
        // setUserId(id)
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
                return (
                    <ButtonGroup>
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => { handleModalOpen(); setUserId(cellValues.row._id) }}
                            style={{ marginRight: "10px", borderRadius: "5px" }}
                        >
                            <i class="fas fa-pen"></i>
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
                                                    <option name="" value="">---Select Role---</option>
                                                    <option name="supervisor" value="supervisor">Supervisor</option>
                                                    <option name="Co-supervisor" value="Co-supervisor">Co-supervisor</option>
                                                    <option name="Panel-Member" value="Panel-Member">Panel-Member</option>
                                                </select>
                                            </form>
                                        </div>
                                    </p>
                                    <Button
                                        onClick={() => updateUser()}
                                        style={{ marginRight: "10px" }}>Update</Button>
                                    <Button onClick={handleModalClose}>Close</Button>
                                </Typography>
                            </Box>
                        </Modal>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => { handleClickOpen(); setUserId(cellValues.row._id) }}
                            style={{ borderRadius: "5px" }}
                        >
                            <i class="fas fa-trash"></i>
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
                                <Button onClick={() => deleteUser()} autoFocus>
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
                            <p>Admin</p>

                            <div class="row" style={{ paddingTop: '1%' }}>
                                <div class="col-md-2">
                                    <div class="card-counter primary">
                                        <i class="fa fa-users"></i>
                                        <span class="count-numbers">{all}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>All</span>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-counter info">
                                        <i class="fas fa-user-graduate"></i>
                                        <span class="count-numbers">{supervisorCount}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>Supervisors</span>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-counter danger">
                                        <i class="fas fa-user-md"></i>
                                        <span class="count-numbers">{coSupervisorCount}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>Co-Supervisors</span>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="card-counter success">
                                        <i class="fas fa-user-shield"></i>
                                        <span class="count-numbers">{panelCount}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>Panel Members</span>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-counter success" style={{ backgroundColor: '#ffbb33' }}>
                                        <i class="fas fa-user-cog"></i>
                                        <span class="count-numbers">{staffCount}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>Staff</span>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card-counter info" style={{ backgroundColor: '#2BBBAD' }}>
                                        <i class="fas fa-user-friends"></i>
                                        <span class="count-numbers">{studentCount}</span>
                                        <span class="count-name" style={{ color: 'white', fontWeight: '600' }}>Students</span>
                                    </div>
                                </div>
                                <Box sx={{ width: '100%', paddingTop: '5%' }}>
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
                                            />
                                        </div>
                                    </TabPanel>
                                </Box>
                            </div>
                        </Box>
                    </center>
                </div>
                <Footerdashboard />
            </div>
        </>
    )
}