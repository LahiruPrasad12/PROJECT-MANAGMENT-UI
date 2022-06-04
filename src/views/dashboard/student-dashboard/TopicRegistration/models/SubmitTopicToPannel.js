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
import { useEffect, useMemo, useState } from "react";
import topicAPI from "../../../../../apis/modules/topic";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ErrorToast from "../../../../../toast/error";
import Success from "../../../../../toast/success";
import { useDropzone } from "react-dropzone";
import panelAPI from "../../../../../apis/modules/panelmember";
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

export default function SubmitTopicToPanel(props) {
  const [openned, setOpen] = React.useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [showSuccessToast, setSuccessShowToast] = useState(false);
  const [showErrorToast, setErrorShowToast] = useState(false);

  const [panel, setPanel] = useState([]);

  useEffect(() => {
    const getOurPanel = async () => {
      let result = (await panelAPI.getOurPanel()).data.results[0];
      setPanel(result);
      console.log(result);
    };
    getOurPanel();
  }, []);
  const [files, setFiles] = useState([]);

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
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
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
    [
      baseStyle,
      isDragActive,
      activeStyle,
      isDragAccept,
      acceptStyle,
      isDragReject,
      rejectStyle,
    ]
  );
  const filepath = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const handleClose = () => {
    setOpen(false);
  };

  const submitTopicToPanel = async () => {
    try {
      setBtnLoading(true);

      let formdata = new FormData();
      formdata.append("doc", acceptedFiles[0]);
      formdata.append("topic_id", props.topic._id);
      formdata.append("panel_member_id", "629b4b5d452ed041b4254382");
      await topicAPI.submitTopicToPanel(formdata);
      setSuccessShowToast(true);
      setOpen(false);
      window.location.reload(false);
    } catch (e) {
      setErrorShowToast(true);
    }
    setBtnLoading(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
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
        Submit My Topic to Panel
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        disableEscapeKeyDown={true}
        open={openned}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          SUBMIT OUR TOPIC TO PANEL
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <form>
              <div className="form-group mt-2">
                <label
                  className="mt-4"
                  style={{ fontWeight: "bold", color: "#5A5A5A" }}
                >
                  Panel member
                </label>
                <input
                  className="form-control"
                  id=""
                  disabled={true}
                  placeholder="Enter Your Topic Name"
                  required
                  value={props.panel}
                />
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
              <div className="form-group mt-2">
                <div hidden={filepath.length > 0} {...getRootProps({ style })}>
                  <input {...getInputProps()} />
                  <p>
                    Drag 'n' drop your image file here, or click to select files
                  </p>
                </div>

                <h4>File Details</h4>
                <ul>{filepath}</ul>
              </div>
              <br />
            </form>
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            onClick={submitTopicToPanel}
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
  );
}
