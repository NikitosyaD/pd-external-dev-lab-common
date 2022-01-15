import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Select, DatePicker, Button, message } from "antd";
import { auth } from "../../firebase";
import { homeworksAPI } from "../../api/api";

// antd
const { Option } = Select;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
  layout: 'vertical',
};

const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function HometasksForm(props) {

  const [task, setTask] = useState({
    name: '',
    groupId: '',
    description: '',
    due_date: '',
    links: ['']
  });
  // useEffect(() => {
  // console.log(task?.due_date.toDateString());
  // console.log(Date.parse(task?.due_date.toDateString()));
  // }, [task]);

  // for message component watch antd Update Message Content (https://ant.design/components/message/)
  const key = 'updatable';

  // current logged in user id
  const { uid } = auth.currentUser;

  const sendData = async (e) => {
    message.loading({ content: 'Requesting...', key });

    homeworksAPI.addHomework({ ...task, uid })
      .then(() => {
        displaySuccess()
      })
      .catch(function (error) {
        console.error("Error adding task: ", error);
        displayError(error);
      });
  };


  function displaySuccess(e) {
    message.success({ content: 'Task added successfully', key });
  }
  function displayError(e) {
    message.error('Task add error' + e);
  }



  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={sendData}
    >
      <Row gutter={24}>
        <Col span={12} key={1}>
          <Form.Item
            label="Task"
            name="task"
            rules={[{
              required: true,
              message: 'Please input name of task!'
            }]}
          >
            <Input onChange={e => setTask({ ...task, name: e.target.value })} value={task.name} />
          </Form.Item>

          {/*<Form.Item*/}
          {/*    label="Group Level"*/}
          {/*    name="groupLevel"*/}
          {/*    rules={[*/}
          {/*      {*/}
          {/*        required: true,*/}
          {/*        message: 'Please select group level!'*/}
          {/*      },*/}
          {/*    ]}*/}
          {/*>*/}
          {/*  <Select*/}
          {/*      placeholder="Select a Group level"*/}
          {/*      allowClear*/}
          {/*      value={group.groupLevel}*/}
          {/*      onChange={val => setTask({...task, groupLevel: val})}*/}
          {/*  >*/}
          {/*    <Option value="beginner">A1-A2 Beginner</Option>*/}
          {/*    <Option value="intermediate">B1-B2 Intermediate</Option>*/}
          {/*    <Option value="advanced">C1-C2 Advanced</Option>*/}
          {/*  </Select>*/}
          {/*</Form.Item>*/}

          <Form.Item
            label="Group Name"
            name="group_name"
            rules={[{
              required: true,
              message: 'Please select group name!'
            }]}
          >
            <Select
              placeholder="Select a Group Name"
              allowClear
              value={task.groupId}
              onChange={val => setTask({ ...task, groupId: val })}
            >
              {props.GroupsList.map((item, index) => (
                <Option key={item.key} value={item.key}>{item.name}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Due date"
            name="dueDate"
            rules={[
              {
                required: true,
                message: 'Please enter a date!'
              },
            ]}
          >
            <DatePicker onChange={val => setTask({ ...task, due_date: val?._d.toDateString() })} />
          </Form.Item>
        </Col>

        <Col span={12} key={2}>
          <Form.Item
            label="Task description"
            name="taskDescription"
          >
            <Input onChange={e => setTask({ ...task, description: e.target.value })} value={task.description} />
          </Form.Item>
          {task.links.map((item, index) => (
            <Form.Item
              label={"Link " + Number(index + 1)}
              name={"link" + index}
              key={"link" + index}
            >
              <Input onChange={e => {
                let linksArr = [...task.links]
                linksArr[index] = e.target.value
                setTask({ ...task, links: linksArr })
              }} value={item} />
            </Form.Item>
          ))}


          <Form.Item>
            <Button type="dashed" onClick={() => setTask({ ...task, links: [...task.links, ''] })}>
              Add Link
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item {...tailLayout}>
        <Button size="large" type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
}

export default HometasksForm;
