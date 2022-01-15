import React from 'react';
import {Button, message, Popconfirm} from "antd";

import {projectFirestore} from "../../../firebase";

function DeleteTask({record}) {

    const group = projectFirestore.collection('testData').doc(record.id);

    // for message component watch antd Update Message Content (https://ant.design/components/message/)
    const key = 'updatable';

    const markAsDeleteted = async (e) => {
        message.loading({ content: 'Requesting...', key});
        group.update({
            isDeleted: true
        })
            .then(() => displaySuccess())
            .catch(function(error) {
                console.error("Error deleting task: ", error);
                displayError();
            });
    }

    // Function for Popconfirm on delete button in table /////////////
    function displaySuccess(e) {
        message.success({ content: 'Task deleted successfully', key});
    }
    function displayError(e) {
        message.error('Task delete error');
    }

    return (
        <Popconfirm
            title={`Are you sure to delete task ${record.groupName}?`}
            onConfirm={markAsDeleteted}
            okText="Yes"
            cancelText="No"
        >
            <Button type="primary" danger>Delete</Button>
        </Popconfirm>
    );
}

export default DeleteTask;
