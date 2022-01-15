import React from 'react';
import {Button, message} from "antd";

import {auth, projectFirestore} from "../../../firebase";

function CreateGroup({groupInfo}) {

  // const testData = projectFirestore.collection('testData');
  //
  // // for message component watch antd Update Message Content (https://ant.design/components/message/)
  // const key = 'updatable';
  //
  // // current logged in user id
  // const {uid} = auth.currentUser;
  // const isDeleted = false;
  //
  // const sendData = async (e) => {
  //     message.loading({ content: 'Requesting...', key});
  //
  //     testData.add({...groupInfo, uid, isDeleted})
  //         .then(() => displaySuccess())
  //         .catch(function(error) {
  //             console.error("Error editing document: ", error);
  //             displayError(error);
  //         });
  // }
  //
  // function displaySuccess(e) {
  //     message.success({ content: 'Group added successfully', key});
  // }
  // function displayError(e) {
  //     message.error('Group add error' + e);
  // }


  return (
      <Button type="primary"
              htmlType="submit"
          // onClick={sendData}
      >
        Create Group
      </Button>
  );
}

export default CreateGroup;
