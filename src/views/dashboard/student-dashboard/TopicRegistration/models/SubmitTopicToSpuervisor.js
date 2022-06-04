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
import chatAPI from "../../../../../apis/modules/chat";

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

export default function RegisterTopicToSupervisor(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupervisor, setSelectedSupervisor] = useState("");
  const [name, setName] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const [showSuccessToast, setSuccessShowToast] = useState(false);
  const [showErrorToast, setErrorShowToast] = useState(false);

  const [category, setCategory] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [topic, setTopic] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = async () => {
    try {
      setLoading(true);
      setOpen(true);
      const categoryRespond = (await categoryAPI.getCategories()).data.data
        .filteredData;
      setCategory(categoryRespond);
    } catch (e) {}
    setLoading(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const selectSupervisor = (event: selectedSupervisor) => {
    setSelectedSupervisor(event.target.value);
    console.log(selectedCategory);
  };

  const selectCategory = async (event: selectedCategory) => {
    try {
      setLoading(true);
      setSelectedCategory(event.target.value);
      const payload = {
        category_id: event.target.value,
      };
      let supervisorsRespond = (await topicAPI.getStaff(payload, "supervisor"))
        .data.data.filteredData;
      setSupervisors(supervisorsRespond);
    } catch (e) {}
    setLoading(false);
  };

  const submitTopic = async () => {
    try {
      setBtnLoading(true);
      let payload = {
        category_id: selectedCategory,
        supervisorID: selectedSupervisor,
        name: name,
      };
      await topicAPI.submitTopicToSupervisor(payload);
      await chatAPI.createChat(payload);
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
              <Success message="Your topic submit to supervisor successfully" />
            </>
          )}

          {showErrorToast && (
            <>
              <ErrorToast message="There have some error. Please try again later" />
            </>
          )}
          <Button
            variant="outlined"
            sx={{
              float: "right",
            }}
            onClick={handleClickOpen}
          >
            Register Our Topic
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
              SUBMIT OUR TOPIC TO SUPERVISOR
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                <form>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <FormControl loading fullWidth>
                        <InputLabel
                          sx={{ marginTop: -1 }}
                          id="demo-simple-select-label"
                        >
                          Select your category
                        </InputLabel>
                        <Select
                          size="small"
                          outlined
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectedCategory}
                          label="Age"
                          onChange={selectCategory}
                        >
                          {category.map((element) => {
                            return (
                              <MenuItem value={element._id}>
                                {element.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-md-6">
                      <FormControl fullWidth disabled={!supervisors}>
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
                          value={selectedSupervisor}
                          label="Age"
                          onChange={selectSupervisor}
                        >
                          {supervisors.map((element) => {
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
                      placeholder="Enter Your Topic Name"
                      required
                      style={{ height: "100px" }}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
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
                disabled={!name || !selectedSupervisor || !selectedCategory}
                onClick={submitTopic}
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
