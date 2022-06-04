import React, { useState } from "react";

import Button from "@mui/material/Button";
import { Alert } from "react-bootstrap";

const Error = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Alert show={show} variant="danger">
        <Alert.Heading>Hey , nice to see you {props.groupName}</Alert.Heading>
        <p>
          You last topic {props.topicName} was rejected. So try another one with
          your best. Good Luck..!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default Error;
