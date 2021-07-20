import React from 'react'
import { Menu } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import menuList from './config'

const { SubMenu } = Menu
const CustomMenu = () => {
    const history = useHistory()
    const {
        location: { pathname },
    } = history
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
                    <Menu.Item key={item.path} icon={<item.icon />}>
                        <Link to={item.path}>
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
            {handMenu(menuList)}
        </Menu>
    )
}

export default CustomMenu
