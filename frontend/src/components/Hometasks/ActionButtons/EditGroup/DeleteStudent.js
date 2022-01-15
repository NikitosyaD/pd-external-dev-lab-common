import React from 'react';

import {projectFirestore} from "../../../../firebase";
import {Button, message, Popconfirm} from "antd";

function DeleteStudent({record}) {
    const student = projectFirestore.collection('students').doc(record.id);

    // for message component watch antd Update Message Content (https://ant.design/components/message/)
    const key = 'updatable';

    const markAsDeleteted = async (e) => {
        message.loading({ content: 'Requesting...', key});
        student.update({
            isDeleted: true
        })
            .then(() => message.success({ content: 'Student deleted successfully', key}))
            .catch(function(error) {
                console.error("Error deleting group: ", error);
                message.error('Group delete error');
            });
    }

    return (
        <Popconfirm
            title={`Are you sure to delete student ${record.name}?`}
            onConfirm={markAsDeleteted}
            okText="Yes"
            cancelText="No"
        >
            <Button type="primary" danger>Delete</Button>
        </Popconfirm>
    );
}

export default DeleteStudent;
