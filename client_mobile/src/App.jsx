const io = require('socket.io-client')
import React, {Component} from 'react';
import Banner from './Banner.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import SignedInIndex from './SignedInIndex.jsx';
import NavigationBar from './NavigationBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false
    };
    this.socket = io('http://localhost:3001');
    this.handleClickSignIn = this.handleClickSignIn.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);

  }

    componentDidMount() {
  }

  handleClickSignIn() {
    console.log('The link was clicked.');
    this.setState({showSignIn: true});
  }

  handleClickSignUp() {
    console.log('The link was clicked.');
    this.setState({showSignUp: true});
  }


  render() {
    const showSignIn = this.state.showSignIn;
    const showSignUp = this.state.showSignUp;

    let form = null;
    if (showSignIn) {
      form = <SignIn />;
    } else {
      form = null;
    }

    let sUp = null;
    if (showSignUp) {
      sUp = <SignUp />;
    } else {
      sUp = null;
    }

    return (

      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp}/>
        <Banner />
        {form}
        {sUp}
        <SignedInIndex />
      </section>

    )
  }
}
