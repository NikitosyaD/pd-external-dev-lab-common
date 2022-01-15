import React from 'react';
import {Button, message} from "antd";
import {auth, projectFirestore} from "../../../firebase";

function CreateTask({groupInfo}) {

    const testData = projectFirestore.collection('testData');

    // for message component watch antd Update Message Content (https://ant.design/components/message/)
    const key = 'updatable';

    // current logged in user id
    const {uid} = auth.currentUser;
    const isDeleted = false;

    const sendData = async (e) => {
        message.loading({ content: 'Requesting...', key});

        testData.add({...groupInfo, uid, isDeleted})
            .then(() => displaySuccess())
            .catch(function(error) {
                console.error("Error editing document: ", error);
                displayError(error);
            });
    }

    function displaySuccess(e) {
        message.success({ content: 'Task added successfully', key});
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
