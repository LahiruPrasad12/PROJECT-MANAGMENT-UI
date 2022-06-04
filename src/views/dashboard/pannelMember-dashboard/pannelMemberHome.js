import React, {useContext, useEffect, useState} from "react";
import panelAPI from "../../../apis/modules/panelmember";
import supervisorAPI from "../../../apis/modules/supervisor";
import downlaodAPI from "../../../apis/modules/donwloadFile";
import {Link} from "react-router-dom";
import PannelMemberSidenav from "../../../layouts/sidenavpannelmember";
import "./pannelMemberHome.css";
import AuthContext from "../../../context/AuthContext";
import axios from '../../../apis/axios'
import FileDownloader from 'js-file-download'
import LoadingButton from "@mui/lab/LoadingButton";
import DownloadIcon from '@mui/icons-material/Download';
import {Tooltip} from "@mui/material";

export default function PanelMemberHome() {
    const [request, setRequest] = useState([]);
    const [document, setDoc] = useState([]);

    const [btn, setBtnLoad] = useState(false);


    useEffect(() => {
        const getMyRequest = async () => {
            const respond = (await panelAPI.getMyRequest()).data.data.Respond;
            setRequest(respond);


        };
        getMyRequest();
    }, []);

    const downloadDocument = async (e) => {
        try {
            setBtnLoad(true)
            e.preventDefault()
            const result = (await downlaodAPI.downloadTopicDocByPanel()).data
            FileDownloader(result, 'download.pdf')
        } catch (e) {
            alert('no such file')
        }
        setBtnLoad(false)

    }

    const Updatestatus = (event, element) => {
        console.log(element);
        if (event.target.value == 1) {
            let payload = {
                topic_id: element._id,
                status: "approved",
            };
            supervisorAPI.acceptRequest(payload);
        } else if(event.target.value == 2) {
            let payload = {
                topic_id: element._id,
                status: "decline",
            };
            supervisorAPI.declineRequest(payload);
        }
    };
    return (
        <>
            <PannelMemberSidenav/>
            <div class="content">
                <div class="container">
                    <center>
                        <h1>TOPIC STATUS UPDATE</h1>
                        <p>Pannel-Member</p>
                        <div style={{marginTop: "4%"}} class="row">
                            
                            <div class="col">
                                <table
                                    style={{width: "90%", height: "100%", marginTop: "1%"}}
                                    class="table"
                                >
                                    <thead class="thead-dark">
                                    <tr style={{textAlign: "center"}}>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Topic</th>
                                        <th scope="col">Topic Status</th>
                                        <th scope="col">Document</th>
                                    </tr>
                                    </thead>
                                    <br/>
                                    <tbody style={{textAlign: "center"}}>
                                    {
                                        request.map((element, index) => {
                                            return <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{element.groupID}</td>
                                                <td>{element.name}</td>
                                                <td>
                                                    <select
                                                        className="btn btn-light dropdown-toggle"
                                                        style={{fontWeight: "bold"}}
                                                        onChange={(e) => {
                                                            Updatestatus(e, element);
                                                        }}
                                                    >
                                                        <option
                                                            style={{color: "orange", fontWeight: "bold"}}
                                                        >
                                                            Pending
                                                        </option>
                                                        <option
                                                            style={{color: "green", fontWeight: "bold"}}
                                                            value={1}
                                                        >
                                                            Accept
                                                        </option>
                                                        <option style={{color: "red", fontWeight: "bold"}} value={2}>
                                                            Reject
                                                        </option>
                                                    </select>
                                                </td>
                                                <td>

                                                    <Tooltip title="Download">
                                                        <LoadingButton
                                                            loading={btn}
                                                            loadingPosition="start"
                                                            variant="outlined"
                                                            onClick={(e) => {
                                                                downloadDocument(e)
                                                            }}
                                                        >
                                                            <DownloadIcon/>
                                                        </LoadingButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        })
                                    }

                                    </tbody>
                                </table>
                                <br/>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}
