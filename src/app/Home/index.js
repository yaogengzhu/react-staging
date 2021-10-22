import React, { useEffect } from 'react';
import Tabs from '@/components/Tabs';
import { remote } from '../../api/index';
import './index.less';

const classPrefix = 'bnq-home';
const Home = () => {
  useEffect(() => {
    remote.post('/apis/common/login.do');
    // console.log(post)
  }, []);
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}></div>
      <Tabs pathname="/home" />
    </div>
  );
};

export default Home;
