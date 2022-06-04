import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Footerdashboard from "../../../../layouts/footerdashboard";
import Sidenav from "../../../../layouts/sidenav";
import '../studenthome.css';
import Button from "@mui/material/Button";
import AuthContext from "../../../../context/AuthContext";
import SubmitTopicToSupervisor from "./models/SubmitTopicToSpuervisor";
import SubmitTopicToCoSupervisor from "./models/SubmitTopicToCoSupervisor";
import SubmitTopicToPanel from "./models/SubmitTopicToPannel";
import categoryAPI from "../../../../apis/modules/topicCategory";
import topicAPI from "../../../../apis/modules/topic";
import Alert from "@mui/material/Alert";
import {AlertTitle} from "@mui/lab";
import SuccessAlert from '../../../../alerts/success'
import ErrorAlerts from '../../../../alerts/error'
import Loader from "../../../../loader/loader";

export default function TopicRegister() {

    const {loggedIn, loggedInGroup} = useContext(AuthContext);
    const [topic, setTopic] = useState([]);
    const [rejectTopic, setReject] = useState([]);
    const [loading, setLoading] = useState(true);

    // const getMyTopic = async () => {
    //     const ourTopicRespond = (await topicAPI.getOurTopic()).data.data.filteredData
    //     setTopic(ourTopicRespond)
    // }

    useEffect(() => {
        setLoading(true)
        const getDetails = async () => {
            try {
                const ourTopicRespond = (await topicAPI.getOurTopic()).data.data.filteredData
                let result = ourTopicRespond.filter((e) => e.state !== 'decline')
                let rejectResult = ourTopicRespond.filter((e) => e.state === 'decline')
                console.log(rejectResult)

                if (rejectResult.length > 0) {
                    let index = rejectResult.length - 1
                    setReject(rejectResult[index])
                }

                console.log(result[0])
                setTopic(result[0])
            } catch (e) {

            }
            setLoading(false)

        }
        getDetails()
    }, [])


    const SetSupervisorTopicPendingWarning = () => {
        return (
            <div>
                <hr/>
                <Alert severity="warning">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Your submission is still pending on your supervisor. Please be a good patient until respond your
                    supervisor
                </Alert>
                <hr/>
            </div>
        )
    }
    const SetCoSupervisorTopicPendingWarning = () => {
        return (
            <div>
                <Alert severity="warning">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Your submission is accept by supervisor. But it still pending on your co-supervisor. Please be a
                    good patient until respond your
                    supervisor
                </Alert>
                <hr/>
            </div>
        )
    }
    const SetPanelTopicPendingWarning = () => {
        return (
            <div>
                <Alert severity="warning">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Your submission is accept by cor supervisor. But it still pending on your panel. Please be a good
                    patient until respond your
                    panel
                </Alert>
                <hr/>
            </div>
        )
    }

    const SetSupervisorTopicAcceptSuccess = () => {
        return (
            <div>
                <hr/>
                <Alert severity="success">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Congrats!! your topic is accept by supervisor. now submit it to ce-supervisor by clicking below
                    button
                </Alert>

                <hr/>
            </div>
        )
    }
    const SetCoSupervisorTopicAcceptSuccess = () => {
        return (
            <div>
                <Alert severity="success">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Congrats!! your topic is accept by co supervisor. now submit it to panel members by clicking below
                    button
                </Alert>
                <hr/>
            </div>
        )
    }
    const SetPanelTopicAcceptSuccess = () => {
        return (
            <div>
                <Alert severity="success">
                    <AlertTitle>Hey, nice to see you {loggedInGroup.name}</AlertTitle>
                    Congrats!! your topic is accept by co panel. Now you can continue your research. Good
                    luck {loggedInGroup.name}
                </Alert>
                <hr/>
            </div>
        )
    }

    return (
        <>
            {
                loading && (
                    <Loader/>
                )
            }
            {
                !loading && (
                    <div>
                        <Sidenav/>
                        <div class="contents">
                            <div class="container">
                                {

                                    topic == null && !rejectTopic.name && (
                                        <div style={{marginTop: '-12px'}}>
                                            <SuccessAlert/>
                                        </div>
                                    )
                                }

                                <div hidden={!rejectTopic.name} style={{marginTop: '-12px'}}>
                                    <ErrorAlerts groupName={loggedInGroup.name} topicName={rejectTopic.name}/>
                                </div>

                                {
                                    !topic && (
                                        <SubmitTopicToSupervisor/>
                                    )
                                }

                                {
                                    topic && topic.state === 'decline' && (
                                        <SubmitTopicToSupervisor/>
                                    )
                                }

                                {
                                    topic && topic.state === 'supervisorPending' && (
                                        <SetSupervisorTopicPendingWarning/>
                                    )
                                }

                                {
                                    topic && topic.state === 'supervisorAccept' && (
                                        <div>
                                            <SetSupervisorTopicAcceptSuccess/>
                                            <SubmitTopicToCoSupervisor topic={topic}/>
                                        </div>
                                    )
                                }

                                {
                                    topic && topic.state === 'co_supervisorPending' && (
                                        <div>
                                            <SetSupervisorTopicAcceptSuccess/>
                                            <SetCoSupervisorTopicPendingWarning/>
                                        </div>
                                    )
                                }

                                {
                                    topic && topic.state === 'co_supervisorAccept' && (
                                        <div>
                                            <SetSupervisorTopicAcceptSuccess/>
                                            <SetCoSupervisorTopicAcceptSuccess/>
                                            <SubmitTopicToPanel topic={topic}/>
                                        </div>
                                    )
                                }
                                {
                                    topic && topic.state === 'pane_member_pending' && (
                                        <div>
                                            <SetSupervisorTopicAcceptSuccess/>
                                            <SetCoSupervisorTopicAcceptSuccess/>
                                            <SetPanelTopicPendingWarning/>

                                        </div>
                                    )
                                }
                                {
                                    topic && topic.state === 'approved' && (
                                        <div>
                                            <SetSupervisorTopicAcceptSuccess/>
                                            <SetCoSupervisorTopicAcceptSuccess/>
                                            <SetPanelTopicAcceptSuccess/>

                                        </div>
                                    )
                                }

                            </div>
                            <Footerdashboard/>
                        </div>
                    </div>
                )
            }


        </>
    )
}