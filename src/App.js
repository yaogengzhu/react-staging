import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './app/Home';
import Login from './app/Login';
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
