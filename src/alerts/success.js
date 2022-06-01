import React, {useState} from 'react';

import Button from "@mui/material/Button";
import {Alert} from "react-bootstrap";

const Success = () => {
    const [show, setShow] = useState(true);
    return (
        <div>

            <Alert show={show} variant="success">
                <Alert.Heading>Hey , nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This example
                    text is going to run a bit longer so that you can see how spacing within an
                </p>
                <hr/>
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me y'all!
                    </Button>
                </div>
            </Alert>
        </div>
    );
};

export default Success;