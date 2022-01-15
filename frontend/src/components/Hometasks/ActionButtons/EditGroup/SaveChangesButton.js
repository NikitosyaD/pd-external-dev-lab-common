import React from 'react';
import {Button, message} from "antd";

import {projectFirestore} from "../../../../firebase";

function SaveChangesButton({newGroupData}) {

    const group = projectFirestore.collection('testData').doc(newGroupData.id);

    // for message component watch antd Update Message Content (https://ant.design/components/message/)
    const key = 'updatable';

    const saveNewData = async (e) => {
        message.loading({content: 'Requesting...', key});
        group.update(newGroupData)
            .then(() => displaySuccess())
            .catch(function (error) {
                console.error("Task changes saving error: ", error);
                displayError();
            });

    }

    function displaySuccess(e) {
        message.success({content: 'Task changes saved successfully', key});
    }

    function displayError(e) {
        message.error('Task changes saving error');
    }

    return (
        <Button style={{ background: "#31DC9E", borderColor: "white" }} size="large" type="primary" htmlType="submit" onClick={saveNewData}>
            Update
        </Button>
    );
}

export default SaveChangesButton;
