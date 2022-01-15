import React, {useEffect, useState} from 'react';
import {Table} from "antd";

// firebase
import {projectFirestore} from '../../../../firebase'
import {useCollectionData} from "react-firebase-hooks/firestore";
import DeleteStudent from "./DeleteStudent";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {studentsAPI} from "../../../../api/api";

// ant design
const {Column} = Table;


function StudentsTable({record, students}) {

  const groupId = record.key

  return (
    // Slavocado strongly recomend useing rowKey prop in Table
    // This id prop gets from testData array element which is placed in its current Row (the Row comp Table generates automatically)
    <Table dataSource={students} rowKey="id" loading={!students}>

      <Column title="Name" dataIndex="name" key="name"/>
      <Column title="Surname" dataIndex="last_name" key="last_name"/>
      <Column title="Email" dataIndex="email" key="email"/>
      <Column title="Lessons left" dataIndex="lessonsLeft" key="lessonsLeft"/>
      <Column
        title="Action"
        key="id"
        // record is object which holds all data of the table line
        render={(record) => (<DeleteStudent record={record} groupId={groupId}/>)}
      />
    </Table>
  );

}

export default StudentsTable;
