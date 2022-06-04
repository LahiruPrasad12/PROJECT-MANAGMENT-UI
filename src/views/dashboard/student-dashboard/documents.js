import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Footerdashboard from "../../../layouts/footerdashboard";
import Sidenav from "../../../layouts/sidenav";
import "./studenthome.css";
import downlaodAPI from "../../../apis/modules/donwloadFile";
import FileDownloader from "js-file-download";

export default function Documents() {
    const [btn, setBtnLoad] = useState(false);

    const downloadDocument = async (e) => {
        try {
            setBtnLoad(true)
            e.preventDefault()
            const result = (await downlaodAPI.downloadMarkingSchema()).data
            FileDownloader(result, 'download.pdf')
        } catch (e) {
            alert('no such file')
        }
        setBtnLoad(false)

    }

    return (
        <>
            <Sidenav/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>DOCUMENTS</h1>
                        <p>
                            <Link to="/student/home">Student</Link> / Marking-schema
                        </p>
                        <div style={{marginTop: "12%"}} class="row">
                            <div class="col">
                                <div
                                    style={{
                                        paddingTop: "3%",
                                        paddingLeft: "5%",
                                        paddingRight: "5%",
                                        paddingBottom: "3%",
                                    }}
                                    className="card"
                                >
                                    <h4>Download marking-schema</h4>
                                    <label style={{paddingBottom: "3%"}} class="form-label">
                                        (Click to download template)
                                    </label>
                                    <button
                                        onClick={downloadDocument}
                                        disabled={btn}
                                        style={{borderRadius: "0"}}
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                    >
                                        {btn ? 'Downloading...' : 'Download'}
                                    </button>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
                <Footerdashboard/>
            </div>
        </>
    );
}
