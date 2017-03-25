const io = require('socket.io-client')
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Banner from './Banner.jsx';
import Buttons from './Buttons.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import SignedInIndex from './SignedInIndex.jsx';
import Gamelobby from './Gamelobby.jsx';
import NavigationBar from './NavigationBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
    this.socket = io('http://localhost:3001');

  }

    componentDidMount() {
  }

  render() {

    return (

      <section className="main">
        <NavigationBar />
        {this.props.children}
      </section>

    )
  }
}
