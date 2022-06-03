import React, { useContext, useEffect, useState } from "react";
import "../../../landing_page/landingPagestyle.css";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Alert } from "react-bootstrap";
import Button from "@mui/material/Button";
import studentAPI from "../../../apis/modules/student";
import AuthContext from "../../../context/AuthContext";
import WarningAlert from "../../../alerts/warnings";
import InfoAlert from "../../../alerts/info";
import { Snackbar, Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import AddGroupMember from "./common/AddGroupMemberForm";
import ErrorToast from "../../../toast/error";

export default function GroupRegister() {
  const { loggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (loggedIn.groupID) {
      window.location = "/student/home";
    }
  });
  const [showToast, setShowToast] = useState(false);
  const [show, setShow] = useState(true);
  const [memberRegisterState, setMemberRegisterState] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [name, setName] = useState("");

  //create group
  const createGroup = async () => {
    try {
      let payload = {
        name,
      };
      setBtnLoading(true);
      await studentAPI.createGroup(payload);
      setMemberRegisterState(false);
    } catch (e) {
      setShowToast(true);
    }
    setBtnLoading(false);
  };
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
              Aww yeah, you successfully read this important alert message. This
              example text is going to run a bit longer so that you can see how
              spacing within an
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me y'all!
              </Button>
            </div>
          </Alert>
        <center style={{ paddingTop: "1%" }}>
          <Button
            hidden={show}
            data-bs-toggle="modal"
            data-bs-target="#createGroup"
            variant="contained"
            disableElevation
          >
            Create a new group
          </Button>
          <Button
            hidden={!show}
            data-bs-toggle="modal"
            data-bs-target="#createGroup"
            variant="contained"
            disableElevation
          >
            Create a new group
          </Button>
          <img style={{ paddingTop: "3%" }} src="https://i.postimg.cc/MppMHjXS/ezgif-com-gif-maker-1.gif" />
        </center>
        </div>
        
      </div>
              
      {/*group create model*/}
      <div
        className="modal fade"
        id="createGroup"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col">
                <div
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                  className="card"
                >
                  <WarningAlert message="This group name will not be changes" />
                  <h4
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      marginTop: "5%",
                      marginBottom: "2%",
                    }}
                  >
                    Group Register
                  </h4>
                  <form>
                    <div className="form-group">
                      <label style={{ fontWeight: "bold", color: "#5A5A5A" }}>
                        Group Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter Your Group Name"
                        required
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        disabled={btnLoading || name.length === 0}
                        sx={{
                          float: "right",
                          marginBottom: "10px",
                          marginLeft: "5px",
                          marginTop: "5px",
                        }}
                        data-bs-toggle="modal"
                        data-bs-target="#addStudent"
                        onClick={createGroup}
                      >
                        {btnLoading ? "Registering..." : "next"}
                      </Button>
                      <Button
                        variant="contained"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        sx={{
                          float: "right",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      >
                        close
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*student add model*/}
      <div
        hidden={memberRegisterState}
        className="modal fade"
        id="addStudent"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <AddGroupMember rowNumber={4} />
            </div>
          </div>
        </div>
      </div>

      {showToast && (
        <>
          <ErrorToast message="This group name is already exists" />
        </>
      )}
      <Footer />
    </>
  );
}
