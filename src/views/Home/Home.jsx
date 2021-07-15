import $request from '@/api'
import React, { useEffect } from 'react'

const Home = () => {

    const getSonglist = () => {
        $request.get({
            url: '/api/search?keywords=111'
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
