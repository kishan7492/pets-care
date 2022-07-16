import React, { useState, useEffect } from 'react'
import { Tabs, Card, Button, Row, Col } from 'antd'

import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
} from '@ant-design/icons'
import { firestore } from '../../config/firebase'
import { collection, query, where, getDocs } from 'firebase/firestore'
const { TabPane } = Tabs
const { Meta } = Card

const Setting = () => {
    const defaultTab = 'pets'
    const [currentTab, setCurrentTab] = useState(defaultTab)
    const [pets, setPets] = useState([])

    const getAllPetsOfUser = async () => {
        const pets = []
        const q = query(
            collection(firestore, 'pets'),
            where('userID', '==', '8yxVkRm8yAUys5tAF1qcE6wYiB73')
        )
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            pets.push(doc.data())
        })
        return pets
    }

    useEffect(() => {
        getAllPetsOfUser().then((pets) => {
            setPets(pets)
        })
    }, [])

    return (
        <Tabs
            defaultActiveKey={defaultTab}
            onChange={(key) => setCurrentTab(key)}
            tabBarExtraContent={
                currentTab === defaultTab && <Button>Add Pets</Button>
            }
        >
            <TabPane tab="Pets" key="pets">
                <Row>
                    {pets.map((pet) => (
                        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                            <Card
                                style={{ width: 300 }}
                                cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    title={pet.name}
                                    description={pet.description}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </TabPane>
            <TabPane tab="My Profile" key="profile">
                My Profile
            </TabPane>
        </Tabs>
    )
}

export default Setting
