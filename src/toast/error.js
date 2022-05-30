import React, {useState} from 'react';

import {Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";

const Error = (props) => {
    const [open, setOpen] = useState(true);
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={2000} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    );
};

export default Error;