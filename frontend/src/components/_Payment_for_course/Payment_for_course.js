import {Col, Layout, Row} from "antd";

import CoursesPrice from "./CoursesPrice";
// For antd
const {Header, Content, Footer} = Layout;

function Payment() {

    return (
        <Layout>
            <Header className="site-layout-sub-header-background" >
                <Row align="middle" justify="space-between">
                    <Col>
                        <h1>Payment for the course</h1>
                    </Col>
                </Row>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360}}>
                    <CoursesPrice />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>LearningAcademy ©2020 Created by PolytechTeam</Footer>
        </Layout>
    );
}

export default Payment;