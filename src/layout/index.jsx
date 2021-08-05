import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomMenu from './CustomMenu/Menu'
import Container from './Container'
import CustomHeader from '@/component/CustomHeader/CustomHeader'
const { Header, Footer, Sider, Content } = Layout

const BasicLayout = () => {
    return (
        <Layout>
            <Router>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white'}}>
                    <div style={{ height: '32px', margin: '16px' }}>
                        <h1 style={{ color: '#fff'}}>xx中台系统</h1>
                    </div>
                    <CustomMenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                        <CustomHeader />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', height: '100%', minHeight: '360px' }}>
                            <Container />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>yaogengzhu @2021</Footer>
                </Layout>
            </Router>
        </Layout>
    )
}

export default BasicLayout
