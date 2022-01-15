import React, { useState } from 'react';
import {Form, Input, message, Select} from "antd";
import CreateGroup from "./ActionButtons/CreateGroup";
import data from "../Language.json"

import { groupsListAPI } from "../../api/api";

// antd
const { Option } = Select;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function GroupsForm(props) {

  const [group, setGroup] = useState({
    groupName: '',
    groupLevel: '',
    groupLanguage: '',
    numberOfStudents: 0
  });

  const key = 'adding';


  const onFinish = () => {
    const data = {
      name: group.groupName,
      lvl: group.groupLevel,
      lang: group.groupLanguage,
      students_count: group.numberOfStudents,
      students: []
    }
    message.loading({content: 'Requesting...', key});
    groupsListAPI.addGroup(data).then(() => {
      message.destroy()
      displaySuccess()
    }).catch(function (error) {
      console.error("Error deleting group: ", error);
      message.destroy()
      displayError();
    });
  }

  function displaySuccess(e) {
    message.success({content: 'Group added successfully'});
  }

  function displayError(e) {
    message.error('Group add error');
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      // Todo
      onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Group Name"
        name="groupName"
        rules={[{ required: true, message: 'Please input group name!' }]}
      >
        <Input onChange={e => setGroup({ ...group, groupName: e.target.value })} value={group.groupName} />
      </Form.Item>

      <Form.Item
        label="Group Level"
        name="groupLevel"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a Group Level"
          allowClear
          value={group.groupLevel}
          onChange={val => setGroup({ ...group, groupLevel: val })}
        >
          <Option value="beginner">A1-A2 Beginner</Option>
          <Option value="intermediate">B1-B2 Intermediate</Option>
          <Option value="advanced">C1-C2 Advanced</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Group Language"
        name="groupLanguage"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a Group Language"
          allowClear
          value={group.groupLanguage}
          onChange={val => setGroup({ ...group, groupLanguage: val })}
        >
          {data[0].language.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <CreateGroup groupInfo={group} />
      </Form.Item>
    </Form>
  );
}

export default GroupsForm;
