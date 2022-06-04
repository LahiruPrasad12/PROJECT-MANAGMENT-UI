import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import supervisorAPI from "../../../apis/modules/supervisor";
import Sidenavsupervisor from "../../../layouts/sidenavsupervisor";
import "../../dashboard/student-dashboard/studenthome.css";
import Footerdashboard from "../../../layouts/footerdashboard";
import {element} from "prop-types";
import Success from "../../../toast/success";

export default function Supervisorhome() {
    const [request, setRequest] = useState([]);
    const [showSuccessToast, setSuccessShowToast] = useState(false);
    useEffect(() => {
        const getMyRequest = async () => {
            const respond = (await supervisorAPI.getmyRequest()).data.data.Respond;
            setRequest(respond);
            console.log(respond);
        };
        getMyRequest();
    }, []);

    const getMyRequest = async () => {
        const respond = (await supervisorAPI.getmyRequest()).data.data.Respond;
        setRequest(respond);
    }

    const Updatestatus = (event, element) => {
        try {
            if (event.target.value == 1) {
                let payload = {
                    topic_id: element._id,
                    status: "supervisorAccept",
                };
                supervisorAPI.acceptRequest(payload);
                getMyRequest()
            } else {
                let payload = {
                    topic_id: element._id,
                    status: "decline",
                };
                supervisorAPI.declineRequest(payload);
            }
            setSuccessShowToast(true)
        } catch (e) {
            alert(e.message)
        }
    };


    const getConfirmation = () => {

    }
    return (
        <>
            <Sidenavsupervisor/>
            <div class="content">
                <div class="container">
                    {
                        showSuccessToast && (<>
                                <Success message="Topic state update successfully"/>
                            </>
                        )
                    }
                    <center>
                        <h1>TOPIC STATUS UPDATE</h1>
                        <p>Supervisor</p>
                        <div style={{marginTop: "4%"}} class="row">
                            <form action="#" method="get" id="searchForm" class="input-group">
                                <input
                                    type="search"
                                    class="form-control"
                                    name="search"
                                    placeholder="Search Groups..."
                                />
                                <button
                                    type="button"
                                    style={{borderRadius: "0px"}}
                                    class="btn btn-primary"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-search"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </form>
                            <div class="col">
                                <table
                                    style={{width: "90%", height: "100%", marginTop: "4%"}}
                                    class="table"
                                >
                                    <thead class="thead-dark">
                                    <tr style={{textAlign: "center"}}>
                                        <th scope="col">#</th>
                                        <th scope="col">Group Name</th>
                                        <th scope="col">Topic</th>
                                        <th scope="col">Topic Status</th>
                                    </tr>
                                    </thead>
                                    <br/>
                                    <tbody style={{textAlign: "center"}}>
                                    {request.map((element, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{element.groupID}</td>
                                                <td>{element.name}</td>
                                                <td>
                                                    <select
                                                        className="btn btn-light dropdown-toggle"
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                        onChange={(e) => {
                                                            Updatestatus(e, element);
                                                        }}
                                                    >
                                                        <option
                                                            style={{
                                                                color: "orange",
                                                                fontWeight: "bold",
                                                            }}
                                                        >
                                                            Pending
                                                        </option>
                                                        <option
                                                            style={{
                                                                color: "green",
                                                                fontWeight: "bold",
                                                            }}
                                                            value={1}
                                                        >
                                                            Accept
                                                        </option>
                                                        <option
                                                            style={{
                                                                color: "red",
                                                                fontWeight: "bold",
                                                            }}
                                                            value={2}
                                                        >
                                                            Reject
                                                        </option>
                                                    </select>
                                                    <button
                                                        style={{
                                                            marginLeft: "3%",
                                                        }}
                                                        type="button"
                                                        class="btn btn-success btn-sm"
                                                    >
                                                        <i class="fas fa-sync"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
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
