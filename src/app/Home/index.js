import React from 'react';
import { HashRouter  as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Switch, Route, Redirect } from 'react-router';
import Tabs from '@/components/Tabs';
import './index.less';
import HomeIndex from './HomeIndex/index';
import Todo from './Todo/index';
import Message from './Message/index';
import PersonCenter from './personCenter/index';

const classPrefix = 'bnq-home';
export default function Home() {
  return (
    <div className={`${classPrefix}-page`}>
      <Router>
        <div className={`${classPrefix}-container`}>
          <Switch>
            <Route path="/home/index" component={HomeIndex} />
            <Route path="/home/todo" component={Todo} />
            <Route path="/home/message" component={Message} />
            <Route path="/home/personCenter" component={PersonCenter} />
            <Redirect path="/home" to="/home/index" />
          </Switch>
        </div>
        <Tabs />
      </Router>
    </div>
  );
}
