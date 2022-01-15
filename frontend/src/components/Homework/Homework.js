import {Col, Layout, Row} from "antd";

import HomeworkTable from "./HomeworkTable";
import LogOut from "../LogOut";
import {Redirect} from "react-router-dom";
import {setHomeworkReady} from "../../redux/homeworkReducer";

// For antd
const {Header, Content, Footer} = Layout;

function Homework(props) {

  return (
      <Layout>
        <Header className="site-layout-sub-header-background">
          <Row align="middle" justify="space-between">
            <Col>
              <h1>Your Homework</h1>
            </Col>
            <Col>
              <LogOut />
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '24px 16px 0'}}>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
            <HomeworkTable Homeworks={props.Homeworks} toggleHomeworkStatus={props.toggleHomeworkStatus}/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>LearningAcademy ©2020 Created by PolytechTeam</Footer>
      </Layout>
  );

}


export default Homework;
