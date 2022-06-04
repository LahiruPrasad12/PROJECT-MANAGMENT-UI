import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import categoryAPI from "../../../../../apis/modules/topicCategory";
import topicAPI from "../../../../../apis/modules/topic";
import { Spinner } from "react-bootstrap";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ErrorToast from "../../../../../toast/error";
import Success from "../../../../../toast/success";
import Loader from "../../../../../loader/loader";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function SubmitTopicToCoSupervisor(props) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedCoSupervisor, setSelectedCoSupervisor] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const [showSuccessToast, setSuccessShowToast] = useState(false);
  const [showErrorToast, setErrorShowToast] = useState(false);

  const [coSuperVisor, setCoSupervisor] = useState([]);

  const handleClickOpen = async () => {
    setOpen(true);
    let payload = {
      category_id: props.topic.category_id,
    };
    let supervisorsRespond = (await topicAPI.getStaff(payload, "Co-supervisor"))
      .data.data.filteredData;
    setCoSupervisor(supervisorsRespond);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const selectSupervisor = (event: selectedCoSupervisor) => {
    setSelectedCoSupervisor(event.target.value);
    console.log(selectedCoSupervisor);
  };

  const submitTopicToCoSupervisor = async () => {
    try {
      setBtnLoading(true);
      let payload = {
        topic_id: props.topic._id,
        co_supervisorID: selectedCoSupervisor,
      };
      await topicAPI.submitTopicToCoSupervisor(payload);
      setSuccessShowToast(true);
      setOpen(false);
      window.location.reload(false);
    } catch (e) {
      setErrorShowToast(true);
    }
    setBtnLoading(false);
  };

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div>
          {showSuccessToast && (
            <>
              <Success message="Your topic submit to supervisor is successfully" />
            </>
          )}

          {showErrorToast && (
            <>
              <ErrorToast message="There have some errors. Please try again later" />
            </>
          )}
          <Button
            variant="outlined"
            sx={{
              float: "right",
            }}
            onClick={handleClickOpen}
          >
            Submit My Topic to Co-supervisor
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            disableEscapeKeyDown={true}
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            >
              SUBMIT OUR TOPIC TO CO-SUPERVISOR
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <form>
                  <div className="row mt-2">
                    {/*<div class="col-md-6">*/}

                    {/*    <FormControl loading fullWidth>*/}
                    {/*        <InputLabel sx={{marginTop: -1}} id="demo-simple-select-label">Select your*/}
                    {/*            category</InputLabel>*/}
                    {/*        <Select*/}
                    {/*            size="small"*/}
                    {/*            outlined*/}
                    {/*            labelId="demo-simple-select-label"*/}
                    {/*            id="demo-simple-select"*/}
                    {/*            value={selectedCategory}*/}
                    {/*            label="Age"*/}
                    {/*            onChange={selectCategory}*/}

                    {/*        >*/}
                    {/*            {*/}
                    {/*                category.map((element) => {*/}
                    {/*                    return <MenuItem value={element._id}>{element.name}</MenuItem>*/}
                    {/*                })*/}
                    {/*            }*/}
                    {/*        </Select>*/}
                    {/*    </FormControl>*/}
                    {/*</div>*/}
                    <div className="col-md-12">
                      <FormControl fullWidth>
                        <InputLabel
                          sx={{ marginTop: -1 }}
                          id="demo-simple-select-label"
                        >
                          Select your professor
                        </InputLabel>
                        <Select
                          size="small"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedCoSupervisor}
                          label="Age"
                          onChange={selectSupervisor}
                        >
                          {coSuperVisor.map((element) => {
                            return (
                              <MenuItem value={element._id}>
                                {element.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label
                      className="mt-4"
                      style={{ fontWeight: "bold", color: "#5A5A5A" }}
                    >
                      Topic Name
                    </label>
                    <textarea
                      className="form-control"
                      id=""
                      disabled={true}
                      placeholder="Enter Your Topic Name"
                      required
                      style={{ height: "100px" }}
                      value={props.topic.name}
                    />
                  </div>
                  <br />
                </form>
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <LoadingButton
                disabled={!selectedCoSupervisor}
                onClick={submitTopicToCoSupervisor}
                endIcon={<SendIcon />}
                loading={btnLoading}
                loadingPosition="end"
                variant="contained"
              >
                Send
              </LoadingButton>
            </DialogActions>
          </BootstrapDialog>
        </div>
      )}
    </div>
  );
}
