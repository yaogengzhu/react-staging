import React, { useState } from 'react'
import { Button, message } from 'antd'
import { loadScript } from '@/utils/index'
// import Modal from 'antd/lib/modal/Modal'

const Home = () => {
    let lessLoaded = false
    const [color, setColor] = useState('红色')

    const handleColorChange = () => {
        console.log('ok')
        const changeColor = () => {
            window.less
                .modifyVars({
                    '@primary-color': '#ee5e7b',
                })
                .then(() => {
                    setColor('x')
                    message.info('主题色已修改')
                })
        }
        console.log()
        const lessUrl = 'https://cdn.jsdelivr.net/npm/less@4.1.1'
        if (lessLoaded) {
            changeColor()
        } else {
            window.less = {
                async: true,
                env: process.env.NODE_ENV,
                javascriptEnabled: true,
            }

            loadScript(lessUrl).then(() => {
                lessLoaded = true
                changeColor()
            })
        }
    }
    return (
        <div>
            <Button onClick={handleColorChange}>按钮</Button>
            <Button>{color}</Button>
            <div className="custom">我是谁</div>
        </div>
    )
}

export default Home
