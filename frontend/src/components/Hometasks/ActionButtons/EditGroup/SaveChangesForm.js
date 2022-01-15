import React, { useState } from 'react';
import { Form, Row, Col, Input, Select, DatePicker } from "antd";
import SaveChangesButton from "./SaveChangesButton";

const { Option } = Select;

const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 16 },
    layout: 'vertical',
};
const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
};

function SaveChangesForm({ groupData }) {

    const [group, setGroup] = useState({
        ...groupData
    });

    return (
        // Старый код-ориентир, с подключенным сохранением, из SaveChangesForm.js 
        // <Form
        //     {...layout}
        //     name="basic"
        //     >
        //     <Form.Item
        //         label="Task Name"
        //         name="groupName"
        //         rules={[{ required: true, message: 'Please input task name!' }]}
        //     >
        //         <Input onChange={e => setGroup({...group, groupName: e.target.value})} defaultValue={group.groupName} value={group.groupName} placeholder={group.groupName}/>
        //     </Form.Item>

        //     <Form.Item
        //         label="Group Name"
        //         name="groupLevel"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Select
        //             placeholder={group.groupLevel}
        //             allowClear
        //             defaultValue={group.groupLevel}
        //             value={groupData.groupLevel}
        //             onChange={val => setGroup({...group, groupLevel: val})}
        //         >
        //             <Option value="beginner">A1-A2 Beginner</Option>
        //             <Option value="intermediate">B1-B2 Intermediate</Option>
        //             <Option value="advanced">C1-C2 Advanced</Option>
        //         </Select>
        //     </Form.Item>

        //     <Form.Item
        //         label="Group Language"
        //         name="groupLanguage"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Select
        //             placeholder={group.groupLanguage}
        //             allowClear
        //             defaultValue={group.groupLanguage}
        //             value={group.groupLanguage}
        //             onChange={val => setGroup({...group, groupLanguage: val})}
        //         >
        //             <Option value="english">English</Option>
        //             <Option value="french">French</Option>
        //             <Option value="russian">Russian</Option>
        //         </Select>
        //     </Form.Item>

        //     <Form.Item {...tailLayout}>
        //         <SaveChangesButton newGroupData={group}/>
        //     </Form.Item>
        // </Form>

        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
        >
            <Row gutter={24}>
                <Col span={12} key={1}>
                    <Form.Item
                        label="Task"
                        name="task"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Group Name"
                        name="groupName"
                    >
                        <Select
                            placeholder="Select a Group Name"
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
                        label="Due data"
                        name="dueData"
                    >
                        <DatePicker />
                    </Form.Item>
                </Col>

                <Col span={12} key={2}>
                    <Form.Item
                        label="Task description"
                        name="taskDescription"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Links"
                        name="links"
                    >
                        <Input />
                    </Form.Item>

                </Col>
            </Row>
            <Form.Item {...tailLayout}>
                <SaveChangesButton newGroupData={group} />
            </Form.Item>
        </Form>
    );
}

export default SaveChangesForm;
