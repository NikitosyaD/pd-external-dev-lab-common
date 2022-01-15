import React from 'react';
import {Table} from "antd";
import {Checkbox} from 'antd';
import ModalWindow from './Modal'

// firebase
import {projectFirestore} from '../../firebase'
import {useCollectionData} from "react-firebase-hooks/firestore";

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//         <>
//           {tags.map(tag => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//                 <Tag color={color} key={tag}>
//                   {tag.toUpperCase()}
//                 </Tag>
//             );
//           })}
//         </>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (text, record) => (
//         <Space size="middle">
//           <a>Invite {record.name}</a>
//           <a>Delete</a>
//         </Space>
//     ),
//   },
// ];


// ant design
const {Column} = Table;

function HomeworkTable(props) {
  function onChange(id, e) {
    props.toggleHomeworkStatus(e.target.checked, id);
  }

  // const testRef = projectFirestore.collection("testData")
  //     .where("isDeleted", "!=", true);
  // //
  // // //const query = testRef.limit(5);
  // const query = testRef;
  // const [testData] = useCollectionData(query, {idField: 'id'})
  // console.log(testData)
  return (
      // Slavocado strongly recomend useing rowKey prop in Table
      // This id prop gets from testData array element which is placed in its current Row (the Row comp Table generates automatically)
      <div>
        <Table dataSource={props.Homeworks} rowKey="id" loading={!props.Homeworks} scroll={{ x: 495, y: 400 }}>
        <Column title="Hometasks Name" dataIndex={"name"} render={(text) => <a>{text}</a>} key={"name"}/>
        <Column title="Desciption" dataIndex={"description"} key={"description"}/>
        <Column title="Due Date" dataIndex={"due_date"} key={"due_date"}/>
        <Column title="Links" dataIndex={"links"} render={(array) => (
            <div style={{display: "flex", flexWrap: "wrap"}}>
              {array.map(item => {
                console.log(item)
                return (
                    <a href={item} style={{marginRight: "10px"}} key={item.split("/")[2]}>
                      {item.split("/")[2]}
                    </a>
                );
              })}
            </div>
        )} key="links"/>
        <Column title="Complete" render={(item) => <Checkbox onChange={e => onChange(item.id, e)}/>} key={"complete"}/>
      </Table>
      <ModalWindow />
      </div>
  );
}

export default HomeworkTable;
