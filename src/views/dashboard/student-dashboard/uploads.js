import React, {useContext, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import Sidenavsupervisor from "../../../layouts/sidenav";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./studenthome.css";
import {useDropzone} from "react-dropzone";
import documentAPI from "../../../apis/modules/document";
import Success from "../../../toast/success";
import ErrorToast from "../../../toast/error";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
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
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function StudentUploads() {
    const [value, setValue] = React.useState(0);

    const [files, setFiles] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [showSuccessToast, setSuccessShowToast] = useState(false);
    const [showErrorToast, setErrorShowToast] = useState(false);

    const baseStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "90px",
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#A9A9B0",
        borderStyle: "dashed",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        color: "default",
        outline: "none",
        transition: "border .24s ease-in-out",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const activeStyle = {
        borderColor: "#2196f3",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const acceptStyle = {
        borderColor: "#00e676",
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const rejectStyle = {
        borderColor: "#ff1744",
    };

    //This is used to drag and drop image
    const {acceptedFiles, getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open} = useDropzone({
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });


    //This is used style drag and drop image
    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [baseStyle, isDragActive, activeStyle, isDragAccept, acceptStyle, isDragReject, rejectStyle]
    );
    const filepath = acceptedFiles.map((file) => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const uploadDocument = async () => {
        try {

            setBtnLoading(true)

            let formdata = new FormData();
            formdata.append("doc", acceptedFiles[0]);

            await documentAPI.uploadDocument(formdata)
            setSuccessShowToast(true)
            window.location.reload(false);

        } catch (e) {
            setErrorShowToast(true)
        }
        setBtnLoading(false)
    }

    const uploadPresentation = async (e) => {
        try {
            e.preventDefault()
            setBtnLoading(true)
            let formdata = new FormData();
            formdata.append("doc", acceptedFiles[0]);
            await documentAPI.uploadPresentation(formdata)
            setSuccessShowToast(true)
            window.location.reload(false);
        } catch (e) {
            setErrorShowToast(true)
        }
        setBtnLoading(false)
    }

    const uploadFinalThesis = async (e) => {
        try {
            e.preventDefault()
            setBtnLoading(true)
            let formdata = new FormData();
            formdata.append("doc", acceptedFiles[0]);
            await documentAPI.uploadFinalThesis(formdata)
            setSuccessShowToast(true)
            window.location.reload(false);
        } catch (e) {
            setErrorShowToast(true)
        }
        setBtnLoading(false)
    }
    return (
        <>
            <Sidenavsupervisor/>
            <div class="content">
                <div class="container">
                    {
                        showSuccessToast && (<>
                                <Success message="Document upload successfully"/>
                            </>
                        )
                    }

                    {
                        showErrorToast && (<>
                                <ErrorToast message="Please upload PDF document"/>
                            </>
                        )
                    }
                    <center>
                        <h1>UPLOADS</h1>
                        <p>Student</p>
                        <Box sx={{width: "100%"}}>
                            <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab label="Documentation" {...a11yProps(0)} />
                                    <Tab label="Presentation" {...a11yProps(1)} />
                                    <Tab label="Final Thesis" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div
                                    style={{
                                        paddingTop: "3%",
                                        paddingLeft: "5%",
                                        paddingRight: "5%",
                                        paddingBottom: "3%",
                                    }}
                                    className="card"
                                >
                                    <h4>Upload Documentation</h4>
                                    <form>
                                        <center>
                                            <div className="form-group mt-2">
                                                <div hidden={filepath.length > 0} {...getRootProps({style})}>
                                                    <input {...getInputProps()} />
                                                    <p>Drag 'n' drop your image file here, or click to select files</p>
                                                </div>

                                                <h4>File Details</h4>
                                                <ul>{filepath}</ul>
                                            </div>
                                        </center>
                                        <button
                                            style={{borderRadius: "0", width: "100%"}}
                                            type="submit"
                                            class="btn btn-primary btn-lg"
                                            onClick={uploadDocument}
                                            disabled={btnLoading || filepath.length === 0}
                                        >
                                            {btnLoading ? 'Uploading...' : 'Upload Documentation'}
                                        </button>
                                    </form>
                                    <br/>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div
                                    style={{
                                        paddingTop: "3%",
                                        paddingLeft: "5%",
                                        paddingRight: "5%",
                                        paddingBottom: "3%",
                                    }}
                                    className="card"
                                >
                                    <h4>Presentation</h4>
                                    <form>
                                        <center>
                                            <div className="form-group mt-2">
                                                <div hidden={filepath.length > 0} {...getRootProps({style})}>
                                                    <input {...getInputProps()} />
                                                    <p>Drag 'n' drop your image file here, or click to select files</p>
                                                </div>

                                                <h4>File Details</h4>
                                                <ul>{filepath}</ul>
                                            </div>
                                        </center>
                                        <button
                                            disabled={btnLoading || filepath.length === 0}
                                            onClick={(e) => {
                                                uploadPresentation(e)
                                            }}
                                            style={{borderRadius: "0", width: "100%"}}
                                            type="submit"
                                            class="btn btn-primary btn-lg"
                                        >
                                            {btnLoading ? 'Uploading...' : 'Upload Presentation'}
                                        </button>
                                    </form>
                                    <br/>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div
                                    style={{
                                        paddingTop: "3%",
                                        paddingLeft: "5%",
                                        paddingRight: "5%",
                                        paddingBottom: "3%",
                                    }}
                                    className="card"
                                >
                                    <h4>Upload Final Thesis</h4>
                                    <form>
                                        <center>
                                            <div className="form-group mt-2">
                                                <div hidden={filepath.length > 0} {...getRootProps({style})}>
                                                    <input {...getInputProps()} />
                                                    <p>Drag 'n' drop your image file here, or click to select files</p>
                                                </div>

                                                <h4>File Details</h4>
                                                <ul>{filepath}</ul>
                                            </div>
                                        </center>
                                        <button
                                            style={{borderRadius: "0", width: "100%"}}
                                            type="submit"
                                            className="btn btn-primary btn-lg"
                                            onClick={(e) => {
                                                uploadFinalThesis(e)
                                            }}
                                            disabled={btnLoading || filepath.length === 0}
                                        >
                                            {btnLoading ? 'Uploading...' : 'Upload Final thesis'}
                                        </button>
                                    </form>
                                    <br/>
                                </div>
                            </TabPanel>
                        </Box>
                    </center>
                </div>
            </div>
        </>
    );
}
