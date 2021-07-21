import React from 'react'
// import { Input } from 'antd'
import Banner from './modules/Banner/Bannner'

const Home = () => {
    return (
        <div>
            <Banner />
            <h2>图片上传</h2>

            <input  type="file" onChange={(file) => {
                console.log(file.target, '?ss?')
            }} />
        </div>
    )
}

export default Home
