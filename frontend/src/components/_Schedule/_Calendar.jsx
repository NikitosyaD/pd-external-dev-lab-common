import { Calendar, Badge } from "antd";
import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import { auth, projectFirestore } from '../../firebase'

var arr = []

function GetListData(value) {
  let listData;
  if (arr.length != 0){
    let content = arr
    for (let i = 0; i < content.length; i++){
      if (value.format('YYYY-MM-DD') == content[i].day)
        listData = [{ type: "success", content: content[i].time}];
    }
  }



  return listData || [];
}

function dateCellRender(value) {

  const listData = GetListData(value);

  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content} style={{ listStyle: "none", marginLeft: '-30px' }}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );

}

function CalendarBlock() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (value) => {
    setIsModalVisible(true, value);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /*
  const [group, getGroup] = useState([])
  const [lesson, getLesson] = useState([])
  projectFirestore.collection('groups').doc(group_id).get().then(elem => getGroup(elem.data()))
  projectFirestore.collection('lesson').doc(lesson_id).get().then(elem => getLesson(elem.data()))
  console.log(lesson) 
  */
  const [shdeule, setUsers] = useState([])
  const fetchShdeule = async () => {
    const response = projectFirestore.collection('shdeule');
    const data = await response.get();
    data.docs.forEach(item => {
      setUsers([...shdeule, item.data()])
    })
  }
  useEffect(() => {
    fetchShdeule();
  }, []
  )
  arr = shdeule




  return (

    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={showModal} mode="month" headerRender={function () {
        return <div></div>
      }} />
      <Modal
        title="Schedule"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default CalendarBlock;
