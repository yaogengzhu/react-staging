import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import './index.less'
import { previewImg } from '@/utils'

const UploadAvatar = () => {
    const [img, setImg] = useState([''])

    const onChange = (e) => {
        const files = e.target.files[0]
        previewImg(files).then((res) => {
            img.push(res)
            setImg([...img])
        })
    }
    return (
        <div style={{ display: 'flex' }}>
            {img.map((item, index) => (
                <div className="avatarBox" key={index}>
                    {!item && <PlusOutlined />}
                    <input onChange={onChange} type="file" />
                    {item && <Image src={item} alt="" />}
                </div>
            ))}
        </div>
    )
}
export default UploadAvatar
