import React, { useEffect } from 'react';
import { remote } from '../../../api/index';
import './index.less';

const classPrefix = 'bnq-home-index';


const Home = () => {
  useEffect(() => {
    const url = remote.genDomainForEnv('auth');
    console.log('url', url);
  }, []);
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>首页</div>
    </div>
  );
};

export default Home;
