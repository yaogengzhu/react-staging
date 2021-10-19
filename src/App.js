import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import router from './router';
import './index';

const App = () => {
      console.log('ok')
  return (
    <Router>
      {router.getRouter()}
    </Router>
  );
};
export default App;
