import React from 'react';
import { Space, Table } from "antd";

// firebase
import { projectFirestore } from '../../firebase'
import { useCollectionData } from "react-firebase-hooks/firestore";

import DeleteGroup from "./ActionButtons/DeleteGroup";
import EditGroup from "./ActionButtons/EditGroup/EditGroup";

// ant design
const { Column } = Table;

function GroupsTable({GroupsList, Students}) {
  //
  // const testRef = projectFirestore.collection("testData")
  //     .where("isDeleted", "!=", true);
  //
  // // const query = testRef.limit(5);
  // const query = testRef;
  //
  // const [testData] = useCollectionData(query, {idField: 'id'})

  return (
    // Slavocado strongly recomend useing rowKey prop in Table
    // This id prop gets from testData array element which is placed in its current Row (the Row comp Table generates automatically)
    <Table dataSource={GroupsList} rowKey="id" loading={!GroupsList} scroll={{ x: 495, y: 400 }}>

      <Column title="Group Name" dataIndex="name" key="name" />
      <Column title="Group Language" dataIndex="lang" key="lang" />
      <Column title="Group Level" dataIndex="lvl" key="lvl" />
      <Column title="Number of Students" dataIndex="students_count" key="students_count" />

      <Column
        title="Action"
        key="id"
        // record is object which holds all data of the table line
        render={(_, record, index) => (

          <Space size="middle">
            <EditGroup record={record} newStudents={Students} />
            <DeleteGroup record={record} index={index} />
          </Space>
        )}
      />
    </Table>
  );
}

export default GroupsTable;
