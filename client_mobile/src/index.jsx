require("../styles/application.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const app = document.getElementById('trivia-root');
ReactDOM.render(<App />, app);