import { Loading } from 'antd-mobile'
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
const Home = React.lazy(() => import(/* webpackChunkName Home */ './app/Home'));
const Login = React.lazy(() => import(/* webpackChunkName Login */ './app/Login'));
import './index';

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Redirect path="/" to="/home" />
        </Switch>
      </Router>
    </React.Suspense>
  );
};
export default App;
