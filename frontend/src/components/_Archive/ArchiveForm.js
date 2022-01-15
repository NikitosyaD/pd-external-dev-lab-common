import React, { useState } from 'react';
import { Form, Row, Col, Input, Select, DatePicker, Button } from "antd";

import data from "../testGroup.json";

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

function ArchiveForm({ setNewTableData }) {
    const [group, setGroup] = useState({
        groupName: null,
        groupLevel: null,
        groupLanguage: null,
        tWork: null,
        date: null
    });

    const sendData = () => {
        for (let key in group) {
            if (!group[key]) return;
        }
        setNewTableData(group)
    }

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
        >
            <Row gutter={24}>
                <Col span={12} key={1}>
                    <Form.Item
                        label="Group Name"
                        name="groupName"
                        rules={[{
                            required: true,
                            message: 'Please select group name!'
                        }]}
                    >
                        <Select
                            placeholder="Select a Group Name"
                            allowClear
                            value={group.groupName}
                            onChange={val => setGroup({ ...group, groupName: val })}
                        >
                            {data[0].name.map((item) => (
                                <Option key={item}>{item}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Group Level"
                        name="groupLevel"
                        rules={[
                            {
                                required: true,
                                message: 'Please select group level!'
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a Group level"
                            allowClear
                            value={group.groupLevel}
                            onChange={val => setGroup({ ...group, groupLevel: val })}
                        >
                            <Option value="A1-A2">A1-A2 Beginner</Option>
                            <Option value="B1-B2">B1-B2 Intermediate</Option>
                            <Option value="C1-C2">C1-C2 Advanced</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Group Language"
                        name="groupLanguage"
                        rules={[
                            {
                                required: true,
                                message: 'Please select group language!'
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a Group Language"
                            allowClear
                            value={group.groupLanguage}
                            onChange={val => setGroup({ ...group, groupLanguage: val })}
                        >
                            <Option value="English">English</Option>
                            <Option value="Russian">Russian</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Type of work"
                        name="tWork"
                        rules={[
                            {
                                required: true,
                                message: 'Please select type of work!'
                            },
                        ]}
                    >
                        <Select
                            placeholder="Select a Type of work"
                            allowClear
                            value={group.tWork}
                            onChange={val => setGroup({ ...group, tWork: val })}
                        >
                            <Option value="Music (YouTube)">Music (YouTube)</Option>
                            <Option value="Google docs">Google docs</Option>
                            <Option value="Read a text">Read a text</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Due data"
                        name="dueData"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter a date!'
                            },
                        ]}
                    >
                        <DatePicker onChange={moment => setGroup({ ...group, date: new Date(moment) })} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item {...tailLayout}>
                <Button style={{ background: "#31DC9E", borderColor: "white" }} size="large" type="primary" htmlType="submit" onClick={sendData}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ArchiveForm;
