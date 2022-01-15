import React, {useState} from 'react';
import {Button, Col, Layout, Row} from "antd";

import GroupsTable from "./GroupsTable";
import GroupsForm from "./GroupsForm";
import LogOut from "../LogOut";
import NewStudents from "./NewStudents";

// For antd
const {Header, Content, Footer} = Layout;

function GroupsList(props) {
  const [showForm, setShowForm] = useState(false);

  function changeShowForm() {
    setShowForm(!showForm)
  }

  return (
      <Layout>
        <Header className="site-layout-sub-header-background">
          <Row align="middle" justify="space-between">
            <Col>
              <h1>Groups List</h1>
            </Col>
            <Col>
              <LogOut/>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '24px 16px 0'}}>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <Button type="primary" onClick={changeShowForm} style={{marginBottom: '20px'}}>Add new group</Button>
            {
              showForm && // if user press button Add new group, form will show up
              <GroupsForm/>
            }
            <NewStudents  NewStudents={props.Students} />
            <GroupsTable GroupsList={props.GroupsList} Students={props.Students} />
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>LearningAcademy ©2020 Created by PolytechTeam</Footer>
      </Layout>
  );
}

export default GroupsList;
