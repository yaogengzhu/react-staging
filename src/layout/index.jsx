import React from 'react'
import { Layout } from 'antd'
import CustomMenu from './CustomMenu/Menu'

const { Header, Footer, Sider, Content } = Layout

const BasicLayout = (props) => {
    const { children } = props

    return (
        <Layout>
            <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
                <CustomMenu />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', height: '100%', minHeight: '360px' }}>{children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>yaogengzhu @2021</Footer>
            </Layout>
        </Layout>
    )
}

export default BasicLayout
