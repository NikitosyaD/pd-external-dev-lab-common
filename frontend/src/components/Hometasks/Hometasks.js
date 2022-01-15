import React, { useState } from 'react';
import { Button, Col, Layout, Row } from "antd";

import HometasksTable from "./HometasksTable";
import HometasksForm from "./HometasksForm";
import LogOut from "../LogOut";

// For antd
const { Header, Content, Footer } = Layout;

function Hometasks(props) {
  const [showForm, setShowForm] = useState(false);

  function changeShowForm() {
    setShowForm(!showForm)
  }
  return (
    <Layout>
      <Header className="site-layout-sub-header-background">
        <Row align="middle" justify="space-between">
          <Col>
            <h1>Tasks List</h1>
          </Col>
          <Col>
            <LogOut />
          </Col>
        </Row>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Button type="primary" onClick={changeShowForm} style={{ marginBottom: '20px' }}>Add new task</Button>
          {
            showForm && // if user press button Add new group, form will show up
            <HometasksForm GroupsList={props.GroupsList} setHomeworks={props.setHomeworks} />
          }
          <HometasksTable Homeworks={props.Homeworks} GroupsList={props.GroupsList} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>LearningAcademy ©2020 Created by PolytechTeam</Footer>
    </Layout>
  );

}

export default Hometasks;
