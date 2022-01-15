import {Button, Col, Layout, Row} from "antd";
import PaymentsTable from './PaymentsTable';
import LogOut from "../LogOut";
import {Redirect} from "react-router-dom";

const {Header, Content, Footer} = Layout;

function Payments(props) {
  return (
      <Layout>
        <Header className="site-layout-sub-header-background">
          <Row justify="space-between">
            <Col >
              <h1>Payments</h1>
            </Col>
            <Col >
              <LogOut/>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '24px 16px 0'}} key={"Content"}>
          <div className="site-layout-background" style={{padding: 24, minHeight: 360}} key={"content-inner"}>
            <PaymentsTable Payments = {props.Payments}/>
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}} key={"footer"}>
          LearningAcademy ©2020 Created by PolytechTeam
        </Footer>
      </Layout>
  )


}

export default Payments
