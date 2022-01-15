import React from 'react';
import { Button, message } from "antd";
import { auth } from "../../../firebase";
import { homeworksAPI } from "../../../api/api";

function CreateTask(props) {
    // for message component watch antd Update Message Content (https://ant.design/components/message/)
    const key = 'updatable';

    // current logged in user id
    const { uid } = auth.currentUser;

    const sendData = async (e) => {
        message.loading({ content: 'Requesting...', key });

        homeworksAPI.addHomework({ ...props.task, uid })
            .then(() => {
                displaySuccess()
            })
            .catch(function (error) {
                console.error("Error adding task: ", error);
                displayError(error);
            });
    };


    function displaySuccess(e) {
        message.success({ content: 'Task added successfully', key });
    }
    function displayError(e) {
        message.error('Task add error' + e);
    }


    return (
        <Button style={{ background: "#31DC9E", borderColor: "white" }} size="large" type="primary" htmlType="submit" onClick={sendData}>
            Create
        </Button>
    );
}

export default CreateTask;
