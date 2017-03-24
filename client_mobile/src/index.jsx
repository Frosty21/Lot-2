require("../styles/application.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

const app = document.getElementById('trivia-root');
ReactDOM.render(
  <Router>
    <App />
  </Router>
  , app

);