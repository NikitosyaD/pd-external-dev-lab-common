import React from 'react';

import {projectFirestore} from "../../../../firebase";
import {Button, message, Popconfirm} from "antd";
import {groupsListAPI} from "../../../../api/api";

function DeleteStudent({record, groupId}) {
    const key = 'updatable';
    const deleteHandler = async (e) => {
        message.loading({ content: 'Requesting...', key});
        groupsListAPI.deleteStudentFromGroup(record.key, groupId).then(() => message.success({ content: 'Student deleted successfully', key}))
            .catch(function(error) {
                console.error("Error deleting group: ", error);
                message.error('Group delete error');
            });
    }

    return (
        <Popconfirm
            title={`Are you sure to delete student ${record.name}?`}
            okText="Yes"
            onConfirm={deleteHandler}
            cancelText="No"
        >
            <Button type="primary" danger>Delete</Button>
        </Popconfirm>
    );
}

export default DeleteStudent;
