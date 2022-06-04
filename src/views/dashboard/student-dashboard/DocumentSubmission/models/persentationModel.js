import * as React from 'react';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useMemo, useState} from "react";
import {useDropzone} from "react-dropzone";
import documentAPI from "../../../../../apis/modules/document";
import Success from "../../../../../toast/success";
import ErrorToast from "../../../../../toast/error";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

const UploadDocument = (props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function CustomizedDialogs() {
    const [openModel, setOpenModel] = React.useState(false);

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

            await documentAPI.uploadPresentation(formdata)
            setSuccessShowToast(true)

        } catch (e) {
            setErrorShowToast(true)
        }
        setBtnLoading(false)
    }


    const handleClickOpen = () => {
        setSuccessShowToast(false)
        setErrorShowToast(false)
        setOpenModel(true);
    };
    const handleClose = () => {
        setOpenModel(false);
    };

    return (
        <div>

            <button type="button" className="btn btn-outline-light" onClick={handleClickOpen}>Upload</button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openModel}
            >
                {
                    showSuccessToast && (<>
                            <Success message="Presentation upload successfully"/>
                        </>
                    )
                }

                {
                    showErrorToast && (<>
                            <ErrorToast message="Please upload PDF document"/>
                        </>
                    )
                }
                <UploadDocument id="customized-dialog-title" onClose={handleClose}>
                    UPLOAD PRESENTATION
                </UploadDocument>
                <DialogContent dividers>
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
                                className="btn btn-primary btn-lg"
                                onClick={uploadDocument}
                                disabled={btnLoading || filepath.length === 0}
                            >
                                {btnLoading ? 'Uploading...' : 'Upload Documentation'}
                            </button>
                        </form>
                        <br/>
                    </div>

                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
