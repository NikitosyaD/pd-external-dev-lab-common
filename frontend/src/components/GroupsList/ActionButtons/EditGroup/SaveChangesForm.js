import React, { useState } from 'react';
import { Form, Input, Select } from "antd";
import SaveChangesButton from "./SaveChangesButton";

const { Option } = Select;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function SaveChangesForm({ groupData, newStudents }) {

  const [group, setGroup] = useState({
    ...groupData
  });

  return (
    <Form
      {...layout}
      name="basic"
    >
      <Form.Item
        label="Group Name"
        name="groupName"
        rules={[{ required: true, message: 'Please input group name!' }]}
      >
        <Input onChange={e => setGroup({ ...group, name: e.target.value })} defaultValue={group.name}
          value={group.name} placeholder={group.name} />
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
          placeholder={group.lvl}
          allowClear
          defaultValue={group.lvl}
          value={groupData.lvl}
          onChange={val => setGroup({ ...group, lvl: val })}
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
          placeholder={group.lang}
          allowClear
          defaultValue={group.lang}
          value={group.lang}
          onChange={val => setGroup({ ...group, lang: val })}
        >
          <Option value="english">English</Option>
          <Option value="french">French</Option>
          <Option value="russian">Russian</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="New unassigned students"
        name="newStudents"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Select
          allowClear
          mode="multiple"
          onChange={val => setGroup({ ...group, newStudents: val })}
        >
          {
            newStudents.map((e, key) => {
              return <Option key={key} value={e.key}>{e.email}</Option>;
            })
          }
        </Select>
      </Form.Item>


      <Form.Item {...tailLayout}>
        <SaveChangesButton newGroupData={group} />
      </Form.Item>
    </Form>
  );
}

export default SaveChangesForm;
