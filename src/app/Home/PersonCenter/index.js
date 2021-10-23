import React from 'react';
import './index.less';

const classPrefix = 'bnq-personCenter';
const PersonCenter = () => {
  return (
    <div className={`${classPrefix}-page`}>
      <div className={`${classPrefix}-container`}>个人中心</div>
    </div>
  );
};

export default PersonCenter;
