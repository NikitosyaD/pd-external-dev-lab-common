import LogOut from "../LogOut";
import { Button, Col, Layout, Row } from "antd";
import CalendarBlock from './Calendar'
const { Header, Content, Footer } = Layout;

function Schedule(props) {

  return(
    <Layout>
      <Header className="site-layout-sub-header-background">
        <Row justify="space-between">
          <Col>
            <h1>Schedule</h1>
          </Col>
          <Col>
            <LogOut />
          </Col>
        </Row>
      </Header>
      <Content style={{ margin: '24px 16px 0' }} key={"Content"}>
        <div className="site-layout-background" style={{ minHeight: 360 }} key={"content-inner"}>
          <CalendarBlock />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }} key={"footer"}>
        LearningAcademy ©2020 Created by PolytechTeam
      </Footer>
    </Layout>
  )


}

export default Schedule