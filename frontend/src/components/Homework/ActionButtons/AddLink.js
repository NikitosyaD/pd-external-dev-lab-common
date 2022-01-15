import { Button, Form, Input } from "antd";
import React from 'react';

function AddLink() {

    const addLink = () => {
        <Form.Item
            label="Links"
            name="links"
        >
            <Input />
        </Form.Item>
    }

    return (
        <Button type="dashed" onClick={addLink}>
            Add Link
        </Button>
    );
}

export default AddLink;