import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Sidenavsupervisor from "../../../layouts/sidenav";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./studenthome.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StudentUploads() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Sidenavsupervisor />
      <div class="content">
        <div class="container">
          <center>
            <h1>UPLOADS</h1>
            <p>Student</p>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Documentation" {...a11yProps(0)} />
                  <Tab label="Presentation" {...a11yProps(1)} />
                  <Tab label="Final Thesis" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "3%",
                  }}
                  className="card"
                >
                  <h4>Upload Documentation</h4>
                  <form>
                    <center>
                      <input
                        style={{ paddingBottom: "5%", paddingTop: "5%" }}
                        type="file"
                        class="form-label"
                      ></input>
                    </center>
                    <button
                      style={{ borderRadius: "0", width: "100%" }}
                      type="submit"
                      class="btn btn-primary btn-lg"
                    >
                      Upload Documentation
                    </button>
                  </form>
                  <br />
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "3%",
                  }}
                  className="card"
                >
                  <h4>Presentation</h4>
                  <form>
                    <center>
                      <input
                        style={{ paddingBottom: "5%", paddingTop: "5%" }}
                        type="file"
                        class="form-label"
                      ></input>
                    </center>
                    <button
                      style={{ borderRadius: "0", width: "100%" }}
                      type="submit"
                      class="btn btn-primary btn-lg"
                    >
                      Upload Presentation
                    </button>
                  </form>
                  <br />
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "3%",
                  }}
                  className="card"
                >
                  <h4>Upload Final Thesis</h4>
                  <form>
                    <center>
                      <input
                        style={{ paddingBottom: "5%", paddingTop: "5%" }}
                        type="file"
                        class="form-label"
                      ></input>
                    </center>
                    <button
                      style={{ borderRadius: "0", width: "100%" }}
                      type="submit"
                      class="btn btn-primary btn-lg"
                    >
                      Upload Final Thesis
                    </button>
                  </form>
                  <br />
                </div>
              </TabPanel>
            </Box>
          </center>
        </div>
      </div>
    </>
  );
}
