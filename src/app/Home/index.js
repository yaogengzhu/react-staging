import React, { useEffect } from 'react';
import { Loading } from 'antd-mobile';
import Tabs from '../../components/Tabs';
import './index.less';
import router from '../../router'

const classPrefix = 'bnq-home';
const Home = () => {
  useEffect(() => {
    console.log(router.getRouter())
  }, [])
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>
        {/* <iframe src='https://www.baidu.com' style={{ width: '100%', height: '100%' }}></iframe> */}
        <Loading color='primary' />
      </div>
      <Tabs pathname="/home" />
    </div>
  );
};

export default Home;
