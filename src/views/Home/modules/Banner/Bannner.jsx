import React from 'react'
import { Carousel } from 'antd'
import banner1 from './images/banner1.jpeg'
import banner2 from './images/banner2.jpeg'
import './index.less'

const Banner = () => {
    return (
        <Carousel autoplay>
            <div>
                <img className="banner" src={banner1} alt="" />
                {/* <h3 style={contentStyle}>3</h3> */}
            </div>
            <div>
                <img className="banner" src={banner2} alt="" />
            </div>
            <div>
                <img className="banner" src={banner1} alt="" />
            </div>
            <div>
                <img className="banner" src={banner2} alt="" />
            </div>
        </Carousel>
    )
}
export default Banner
