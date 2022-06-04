import React, { useContext, useEffect, useState } from "react";
import "../../../landing_page/landingPagestyle.css";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Alert } from "react-bootstrap";
import Button from "@mui/material/Button";
import AuthContext from "../../../context/AuthContext";

export default function Staffwaiting() {
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn.role === 'supervisor') {
      window.location = "/supervisor/home"
    }else if(loggedIn.role === 'Co-supervisor'){
      window.location = '/cosupervisor/home'
    }else if(loggedIn.role === 'Panel-Member'){
      window.location = '/panelmember/home'
    }
    
    
  });
  const [showToast, setShowToast] = useState(false);
  const [show, setShow] = useState(true);
  const [memberRegisterState, setMemberRegisterState] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [name, setName] = useState("");

 
  return (
    <>
      <Header />
      <img
        src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png"
        alt=""
        class="shape"
      />
      <div class="container">
      
        <div>
          <Alert show={show} variant="success">
            <Alert.Heading>Hey {loggedIn.name}, Nice to see you</Alert.Heading>
            <p>
              Please wait here for for a while. Administrator will assign you a new role!
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>
        <center style={{ paddingTop: "1%" }}>
          <img style={{ paddingTop: "3%" }} src="https://i.postimg.cc/MppMHjXS/ezgif-com-gif-maker-1.gif" />
        </center>
        </div>
        
      </div>
              
      <Footer />
    </>
  );
}
