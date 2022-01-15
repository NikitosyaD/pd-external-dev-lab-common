import { Button, Col, Layout, Row, Input } from "antd";
import React, { useState } from "react";

import ArchiveTable from "./ArchiveTable"
import ArchiveForm from "./ArchiveForm";
import LogOut from "../LogOut";

import dataArchive from "../dataArchive.json";

const { Header, Content, Footer } = Layout;

function Archive() {
    const [showForm, setShowForm] = useState(false);

    const [tableData, setTableData] = useState(dataArchive);

    const dateConvert = date => {
        const d = new Date(date);
        const format = item => String(item).length === 1 ? `0${item}` : item;
        return `${format(d.getDate())}.${format(d.getMonth() + 1)}.${d.getFullYear()}`;
    }

    const setNewTableData = newData => {
        const data = {
            ...newData,
            date: dateConvert(newData.date)
        }
        setTableData(prev => prev.concat(data));
        setShowForm(false)
    }

    return (
        <Layout>
            <Header className="site-layout-sub-header-background">
                <Row justify="space-between">
                    <Col>
                        <h1>Archive</h1>
                    </Col>
                    <Col>
                        <LogOut />
                    </Col>
                </Row>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Button type="primary" onClick={() => setShowForm(prev => !prev)} style={{marginBottom: '20px'}}>Add new content</Button>
                    { showForm && <ArchiveForm setNewTableData={setNewTableData} /> }
                    <ArchiveTable tableData={tableData} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                LearningAcademy ©2020 Created by PolytechTeam
            </Footer>
        </Layout>
    )
}

export default Archive
