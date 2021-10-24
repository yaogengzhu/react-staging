import React from 'react';
import { HashRouter  as Router, Switch, Route, Redirect } from 'react-router-dom';
import Tabs from '@/components/Tabs';
import Loadable from 'react-loadable';
import { Loading } from 'antd-mobile';
const HomeIndex = Loadable({
  loader: () => import('./HomeIndex/index'),
  loading: Loading,
});
const Todo = Loadable({
  loader: () => import('./Todo/index'),
  loading: Loading,
});
const Message = Loadable({
  loader: () => import('./Message/index'),
  loading: Loading,
});
const PersonCenter = Loadable({
  loader: () => import('./personCenter/index'),
  loading: Loading,
});
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
