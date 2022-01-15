import { Button, Modal } from "antd";
import React, { useState } from 'react';
import { ReactTinyLink } from 'react-tiny-link';

import data from "../homeWorks.json"

function ModalWin() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showModal}>link</Button>
            <Modal title="Preview" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ReactTinyLink 
                    cardSize="large"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    url={data[0].url}
                />
            </Modal>
        </div>
    );
}

export default ModalWin;
