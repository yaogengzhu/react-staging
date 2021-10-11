import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import router from './router';
import './index';

const App = () => {
  return (
    <Router>
      {router.getRouter()}
    </Router>
  );
};
export default App;
