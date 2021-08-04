import React from 'react'
import Banner from './modules/Banner/Bannner'
import UploadAvatar from './modules/UploadAvatar/UploadAvatar'

const Home = () => {
    return (
        <div>
            <Banner />
            <h2>图片上传</h2>
            <UploadAvatar />
        </div>
    )
}

export default Home
