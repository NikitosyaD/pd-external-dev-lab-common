import React from 'react';
import { Button, message, Popconfirm } from "antd";
import { doc, deleteDoc } from "firebase/firestore";
import { projectFirestore } from "../../../firebase";
import { groupsListAPI } from "../../../api/api";


function DeleteGroup({ record, index }) {
  const key = 'updatable';

  async function deleteGroup() {
    message.loading({ content: 'Requesting...', key });
    groupsListAPI.deleteGroup(record.key).then(() => {
      message.destroy()
      displaySuccess()
    }).catch(function (error) {
      console.error("Error deleting group: ", error);
      message.destroy()
      displayError();
    });
  }

  // Function for Popconfirm on delete button in table /////////////
  function displaySuccess(e) {
    message.success({ content: 'Group deleted successfully' });
  }

  function displayError(e) {
    message.error('Group delete error');
  }

  return (
    <Popconfirm
      title={`Are you sure to delete group ${record.name}?`}
      // onConfirm={markAsDeleteted}
      onConfirm={deleteGroup}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" danger>Delete</Button>
    </Popconfirm>
  );
}

export default DeleteGroup;
