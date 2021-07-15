import $request from '@/api'
import React, { useEffect } from 'react'

const Home = () => {

    const getSonglist = () => {
        $request.get({
            url: '/comment/music?id=186016&limit=1'
        })
    }

    useEffect(() => {
        getSonglist()
    }, [])
    return (
        <div>
           hello
        </div>
    )
}

export default Home
