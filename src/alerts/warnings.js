import React from 'react';
import {Alert} from "@mui/lab";

const Warnings = (props) => {
    return (
        <div>
            <Alert severity="warning">{props.message}</Alert>
        </div>
    );
};

export default Warnings;