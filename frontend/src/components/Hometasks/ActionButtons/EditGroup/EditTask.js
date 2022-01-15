import React, {useState} from 'react';
import {Button, Modal, Divider } from "antd";

import SaveChangesForm from "./SaveChangesForm";
import SaveChangesTable from "./SaveChangesTable";

function EditTask({record}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>Edit</Button>
            <Modal
                title="Edit Task"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>
                }
                width={800}
                centered
            >
                <SaveChangesForm groupData={record}/>
                <Divider />
                <SaveChangesTable/>
            </Modal>
        </div>
    );
}

export default EditTask;
