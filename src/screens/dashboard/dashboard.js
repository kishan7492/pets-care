import { UserOutlined, SettingOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import Feed from '../../components/feed/feed'
import Setting from '../../components/settings/setting'
import './dashboard.styles.css'
const { Header, Content, Sider } = Layout

const sidebarItems = [
    {
        key: '1',
        icon: <UserOutlined />,
        title: 'feed',
        component: <Feed />,
    },
    {
        key: '2',
        icon: <SettingOutlined />,
        title: 'setting',
        component: <Setting />,
    },
]
const Dashboard = () => {
    // default is the feeds screen.
    const [selectedMenu, setSelectedMenu] = useState(sidebarItems[0])

    return (
        <Layout style={{ height: '100vh' }}>
            <Header className="header">
                <div className="logo">Pet's Care [Logo goes here.]</div>
            </Header>
            <Layout>
                <Sider
                    collapsed={true}
                    width={200}
                    className="site-layout-background"
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={sidebarItems}
                        onSelect={(item) => {
                            setSelectedMenu(
                                sidebarItems.find(
                                    (sidebarItem) =>
                                        sidebarItem.key === item.key
                                )
                            )
                        }}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '24px',
                        height: 'fit-Content',
                    }}
                >
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {selectedMenu.component}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Dashboard
