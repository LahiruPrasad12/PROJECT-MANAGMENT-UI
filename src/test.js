import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";

const Test = () => {
    const [open, setOpen] = useState(false);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = ()=>{
        setOpen(true);
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
        </div>
    );
};

export default Test;