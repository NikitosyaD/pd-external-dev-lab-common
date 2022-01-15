import { Button, Modal, Upload, message, Row, Col } from "antd";
import React, { useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: '/',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      // console.log('Dropped files', e.dataTransfer.files);
    },
  };

function ModalWindow() {
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
      <Button type="primary" onClick={showModal}>
        link
      </Button>
      <Modal
        title="Answer"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row justify="space-between">
        <p style={{width: "250px"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam a
          debitis sit sunt illum tempora adipisci dignissimos, iusto commodi
          enim vitae non officiis suscipit architecto consectetur neque magni
          odio omnis!
        </p>
        <Button>Link</Button>
        </Row>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Modal>
    </div>
  );
}

export default ModalWindow;
