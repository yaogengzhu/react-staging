import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Tabs from '@/components/Tabs';
const HomeIndex = React.lazy(() => import(/* webpackChunkName HomeIndex */ './HomeIndex'));
const Todo = React.lazy(() => import(/* webpackChunkName Todo */ './Todo'));
const Message = React.lazy(() => import(/* webpackChunkName Message */ './Message'));
const PersonCenter = React.lazy(() => import(/* webpackChunkName PersonCenter */ './PersonCenter'));
import './index.less';

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
