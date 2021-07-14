import React from 'react'
import { Menu } from 'antd'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import menuList from './config'

const { SubMenu } = Menu
const CustomMenu = () => {
    const handMenu = (menuList) => {
        return menuList.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.path} title={item.name}>
                        {handMenu(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Router>{handMenu(menuList)}</Router>
        </Menu>
    )
}

export default CustomMenu
