import React from 'react'
import { Avatar } from 'antd';
import './index.less'

const CustomHeader = () => {
    return (
        <div className="customHeader">
            <div style={{ width: '100px' }}></div>
            <Avatar size='large' src='https://avatars.githubusercontent.com/u/42566669?v=4' />
        </div>
    )
}

export default CustomHeader
