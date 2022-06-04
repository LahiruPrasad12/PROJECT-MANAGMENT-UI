import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenavadmin";
import "../student-dashboard/studenthome.css";
import { useDropzone } from "react-dropzone";
import documentAPI from "../../../apis/modules/document";
import Success from "../../../toast/success";
import ErrorToast from "../../../toast/error";

export default function Admindoc() {
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessToast, setSuccessShowToast] = useState(false);
  const [showErrorToast, setErrorShowToast] = useState(false);

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

  const uploadMarkingSchema = async () => {
    try {
      setBtnLoading(true);

      let formdata = new FormData();
      formdata.append("doc", acceptedFiles[0]);

      await documentAPI.uploadMarkingSchema(formdata);
      setSuccessShowToast(true);
    } catch (e) {
      setErrorShowToast(true);
    }
    setBtnLoading(false);
  };

  return (
    <>
      <Sidenav />
      <div class="content">
        <div class="container">
          {showSuccessToast && (
            <>
              <Success message="Document upload successfully" />
            </>
          )}

          {showErrorToast && (
            <>
              <ErrorToast message="Please upload PDF document" />
            </>
          )}
          <center>
            <h1>DOCUMENTS UPLOAD</h1>
            <p>
              <Link to="/admin/home">Admin</Link> / Documents Upload
            </p>
            <div style={{ marginTop: "15%" }} class="row">
              <div className="col">
                <div
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "3%",
                  }}
                  className="card"
                >
                  <h4>Upload Document / Marking Schema</h4>
                  <form>
                    <center>
                      <div className="form-group mt-2">
                        <div
                          hidden={filepath.length > 0}
                          {...getRootProps({ style })}
                        >
                          <input {...getInputProps()} />
                          <p>
                            Drag 'n' drop your image file here, or click to
                            select files
                          </p>
                        </div>

                        <h4>File Details</h4>
                        <ul>{filepath}</ul>
                      </div>
                    </center>
                    <button
                      style={{ borderRadius: "0", width: "100%" }}
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={uploadMarkingSchema}
                      disabled={btnLoading || filepath.length === 0}
                    >
                      {btnLoading ? "Uploading..." : "Upload Marking Schema"}
                    </button>
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </center>
        </div>
        <Footerdashboard />
      </div>
    </>
  );
}
