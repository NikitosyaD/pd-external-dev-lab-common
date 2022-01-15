import { useState, useEffect } from 'react';
import {auth, projectFirestore} from '../../firebase'
import {Table, Input} from "antd"
// import data from '../data.json' Old plug method
const {Column} = Table;


const PaymentsTable=()=>{
    
    const [payment, setPayments] = useState([])
    const fetchPayments=async()=>{
        const response = projectFirestore.collection('payments');
        const data = await response.get();
        data.docs.forEach(item => {
            setPayments([...payment,item.data()])
        })
    }
    useEffect(() => {
        fetchPayments();
    }, []
    )

    return(
        <div className='table'>
            <Table 
                dataSource={payment} 
                loading={!payment} 
                key={"table"} 
                size='small' 
                scroll={{ x: 495, y: 400 }}
            >

            <Column title="Date" dataIndex="date" key="date"/>
            <Column title="User Id" dataIndex="user_id" key="user_id"/>
        
            <Column title="Name" dataIndex="name" key="name"/>
            <Column title="Surname" dataIndex="surname" key="surname"/>
            <Column title="Group Name" dataIndex="groupName" key="groupName" />

            <Column title="Lessons" dataIndex="lessons" key="lessons"/>
            {/* <Column
                title="Lessons left"
                dataIndex="lessons_left"
                key="lessons_left"
                render={(value) => (
                    <Input size='small' defaultValue={value} onPressEnter={function onPress(val){
                        value = val.target.value

                    }}/>
                )}
            /> */}
        </Table>
        </div>
        
    )
}
export default PaymentsTable
