import { Table } from 'antd';

import ModalWin from "./ModalWin";

const { Column } = Table;

const ArchiveTable = ({ tableData }) => {
    return (
        <Table dataSource={tableData} loading={!tableData} scroll={{ x: 495, y: 400 }}>
            <Column title="Group Name" dataIndex="groupName" key="groupName" />
            <Column title="Group Language" dataIndex="groupLanguage" key="groupLanguage" />
            <Column title="Group Level" dataIndex="groupLevel" key="groupLevel" />
            <Column
                title="Type of work"
                dataIndex="tWork"
                key="tWork"
                filters={
                    [
                        {
                            text: "Music (YouTube)",
                            value: "Music (YouTube)"
                        },
                        {
                            text: "Google docs",
                            value: "Google docs"
                        },
                        {
                            text: "Read a text",
                            value: "Read a text"
                        }
                    ]
                }
                onFilter= {(value, record) => record.Type.indexOf(value) === 0}
            />
            <Column title="Date" dataIndex="date" key="date" />
            <Column title="Link" render={() => (
                <ModalWin />
            )} />
        </Table>
    )
}
export default ArchiveTable
