import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import ChallengeProvider from './Context/ChallengeProvider';
ReactDOM.render(
  <React.StrictMode>
    <ChallengeProvider>
    <Router>
      <App />
    </Router>
  </ChallengeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
