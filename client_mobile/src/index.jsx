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
import Banner from './Banner.jsx';

const app = document.getElementById('trivia-root');
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
        <Route exact path="/" component={Banner}/>

        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
    </div>
  </Router>
  , app

);