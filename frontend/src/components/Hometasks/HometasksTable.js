import React, { useEffect, useState } from 'react';
import { Space, Table } from "antd";

// firebase
import { projectFirestore } from '../../firebase'
import { useCollectionData } from "react-firebase-hooks/firestore";

import DeleteTask from "./ActionButtons/DeleteTask";
import EditTask from "./ActionButtons/EditGroup/EditTask";

// ant design
const { Column } = Table;

function HometasksTable(props) {

  const homeworks = props.Homeworks.map(homework => {
    const groupId = homework.groupId
    if (props.GroupsList[0].key === '') return

    const foundGroup = props.GroupsList.find(group => group.key === groupId)
    homework.groupName = foundGroup.name

    return homework
  })


  return (
    // Slavocado strongly recomend useing rowKey prop in Table
    // This id prop gets from testData array element which is placed in its current Row (the Row comp Table generates automatically)
    <Table dataSource={props.Homeworks} rowKey="key" loading={!props.Homeworks} scroll={{ x: 495, y: 400 }}>

      <Column title="Task" dataIndex={"name"} render={(text) => <a>{text}</a>} key={"name"} />
      <Column title="Task description" dataIndex={"description"} key={"description"} />
      <Column title="Group Name" dataIndex={"groupName"} key={"groupName"} />
      {/*<Column title="Links" dataIndex={"link"} key={"link"}/>*/}
      <Column title="Due date" dataIndex={"due_date"} key={"due_date"} />
      <Column
        title="Action"
        key="id"
        render={(record) => (
          <Space size="middle">
            <DeleteTask record={record} />
          </Space>
        )}
      />
      {/*<Column title="Links" dataIndex={"links"} render={(array) => (*/}
      {/*    <div style={{display: "flex", flexWrap: "wrap"}}>*/}
      {/*      {array.map(item => {*/}
      {/*        return (*/}
      {/*            <a href={item} style={{marginRight: "10px"}} key={item.split("/")[2]}>*/}
      {/*              {item.split("/")[2]}*/}
      {/*            </a>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </div>*/}
      {/*)} key="links"/>*/}
      {/*<Column*/}
      {/*    title="Actions"*/}
      {/*    key="id"*/}
      {/*    // record is object which holds all data of the table line*/}
      {/*    render={(record) => (*/}

      {/*        <Space size="middle">*/}
      {/*          <EditTask record={record}/>*/}
      {/*          <DeleteTask record={record}/>*/}
      {/*        </Space>*/}
      {/*    )}*/}
      {/*/>*/}
    </Table>
  );
}

export default HometasksTable;
