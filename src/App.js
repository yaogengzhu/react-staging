import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from 'antd-mobile';
const Home = Loadable({
  loader: () => import('./app/Home'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('./app/Login'),
  loading: Loading,
});
import './index';

const App = () => {
  console.log('ok');
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Redirect path="/" to="/home" />
      </Switch>
    </Router>
  );
};
export default App;
