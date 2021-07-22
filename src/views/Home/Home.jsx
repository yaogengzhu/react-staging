import React from 'react'
import { Input, Modal, Image } from 'antd'
import { previewImg } from '@/utils/index'
import Banner from './modules/Banner/Bannner'

const Home = () => {
    return (
        <div>
            <Banner />
            <h2>图片上传</h2>

            <Input
                type="file"
                onChange={(file) => {
                    console.log(file.target.files, '?ss?')
                    const files = file.target.files[0]
                    console.log(window, '??')
                    previewImg(files).then((res) => {
                        Modal.info({
                            title: '系统提示',
                            content: <Image src={res} />
                        })
                    })
                }}
            />
        </div>
    )
}

export default Home
