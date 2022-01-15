import React, {useEffect, useState} from 'react';
import {Button, Modal, Divider} from "antd";

import SaveChangesForm from "./SaveChangesForm";
import StudentsTable from "./StudentsTable";
import {studentsAPI} from "../../../../api/api";

function EditGroup({record, newStudents}) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [students, setStudents] = useState([])
  useEffect(async () => {
    studentsAPI.getStudentsFromGroup(record).then((result) => {
      setStudents(result)
    })
  }, [])

  useEffect(async () => {
    studentsAPI.getStudentsFromGroup(record).then((result) => {
      setStudents(result)
    })
  }, [record])


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
        title="Edit Group"
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
        <SaveChangesForm groupData={record} newStudents={newStudents.filter((item) => !students.some((element) => element.email === item.email))}/>
        <Divider/>
        <StudentsTable record={record} students={students}/>
      </Modal>
    </div>
  );
}

export default EditGroup;
