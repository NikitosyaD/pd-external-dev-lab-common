import React from 'react';
import { Button, message } from "antd";

import { projectFirestore } from "../../../../firebase";

import { groupsListAPI } from "../../../../api/api";

function SaveChangesButton({ newGroupData }) {

  // const group = projectFirestore.collection('testData').doc(newGroupData.id);
  //
  // // for message component watch antd Update Message Content (https://ant.design/components/message/)
  // const key = 'updatable';
  //
  // const saveNewData = async (e) => {
  //   message.loading({content: 'Requesting...', key});
  //   group.update(newGroupData)
  //       .then(() => displaySuccess())
  //       .catch(function (error) {
  //         console.error("Group changes saving error: ", error);
  //         displayError();
  //       });
  //
  // }
  //
  // function displaySuccess(e) {
  //   message.success({content: 'Group changes saved successfully', key});
  // }
  //
  // function displayError(e) {
  //   message.error('Group changes saving error');
  // }

  const saveNewData = async (e) => {
    groupsListAPI.updateGroup(newGroupData.key, newGroupData)
  }

  return (
    <Button type="primary"
      onClick={saveNewData}
    >
      Save Changes
    </Button>
  );
}

export default SaveChangesButton;
