import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
      </Switch>
    </Router>
  );
};
export default App;
