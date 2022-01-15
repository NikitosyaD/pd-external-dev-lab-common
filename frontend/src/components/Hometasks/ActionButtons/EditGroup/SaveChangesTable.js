import { Space, Table } from "antd";
import { default as React} from 'react';
import DeleteTask from "../DeleteTask";

// ant design
const {Column} = Table;


function SaveChangesTable(props) {

    return (
        // Slavocado strongly recommend using rowKey prop in Table
        // This id prop gets from testData array element which is placed in its current Row (the Row comp Table generates automatically)
        <Table rowKey="id">

            <Column title="Task" dataIndex="groupName" key="groupName"/>
            <Column title="Task description" dataIndex="groupLanguage" key="groupLanguage"/>
            <Column title="Group Name" dataIndex="groupLevel" key="groupLevel"/>
            <Column title="Due date" dataIndex="numberOfStudents" key="numberOfStudents"/>
            <Column title="Links" dataIndex="groupLevel" key="groupLevel"/>

            <Column
                title="Actions"
                key="id"
                // record is object which holds all data of the table line
                render={(record) => (

                    <Space size="middle">
                        <DeleteTask record={record}/>
                    </Space>
                )}
            />
        </Table>
    );
}

export default SaveChangesTable;
