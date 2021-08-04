
import React, { useEffect } from 'react'
import Banner from './modules/Banner/Bannner'
import UploadAvatar from './modules/UploadAvatar/UploadAvatar'
import user from '@/store/user'

const Home = () => {
    useEffect(() => {
        console.log(user.name)
    }, [])
    return (
        <div>
            <Banner />
            <h2>图片上传</h2>
            <UploadAvatar />
        </div>
    )
}

export default Home
