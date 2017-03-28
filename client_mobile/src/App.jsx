const io = require('socket.io-client')
const axios = require('axios');
import React, {Component} from 'react';
import Banner from './Banner.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import JoinRoom from './JoinRoom.jsx';
import NavigationBar from './NavigationBar.jsx';
import Room from './Room.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
      registered: 0,
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      token: '',
      roomId: 0
    };
    this.socket = io('http://localhost:3001');
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.handleClickSignIn = this.handleClickSignIn.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRegisterChange (e) {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value})
  }

  handleRegisterSubmit (e) {
    e.preventDefault();

    // TODO: check passwords are the same

    axios.post('/register', {
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password
    }).then( (res) => {
      const token = JSON.parse(res.request.response);
      console.log('back', token.token);
      this.setState({ token: token.token, registered: 1, username: res.username});
    }).catch( (err) => {
      console.log(err);
    });
  }

  handleClickSignIn() {
    console.log('The link was clicked.');
    this.setState({showSignIn: true});
  }

  handleClickSignUp() {
    console.log('The link was clicked.');
    this.setState({showSignUp: true});
  }

  handleSignInSubmit(e) {
    console.log('Button Clicked');
    e.preventDefault();

    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    }).then( (res) => {
        const token = JSON.parse(res.request.response);
        this.setState({ token: token.token, registered: 1, username: res.username });
        console.log(this.state);
    }).catch( (err) => {
      console.log(err);
    });
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      const roomNumber = event.target.value;
      console.log('enter');

      axios.post('/login', {
        screen: roomNumber
      }).then( (res) => {
        const token = JSON.parse(res.request.response);
        console.log('back', token.token);
        this.setState({ token: token.token, roomId: roomNumber });
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    const showSignIn = this.state.showSignIn;
    const showSignUp = this.state.showSignUp;
    const logged = this.state.registered;

    let form = null;
    if (showSignIn) {
      form = <SignIn email={this.state.email} password={this.state.password} handleSignInSubmit={this.handleSignInSubmit} handleChange={this.handleRegisterChange} />;
    } else {
      form = null;
    }

    let register = null;
    if (showSignUp) {
      register = <SignUp password_confirmation={this.state.password_confirmation} password={this.state.password} email={this.state.email} last_name={this.state.last_name} first_name={this.state.first_name} username={this.state.username} handleSubmit={this.handleRegisterSubmit} handleChange={this.handleRegisterChange} />;
    } else {
      register = null;
    }

    // TODO: if token is present render out "logged in page", render the logout on nav and join room.
    if (this.state.registered === 0) {
      return (
      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp}/>
        <Banner />
        {form}
        {register}
      </section>
    )}

    if (this.state.registered === 1 && this.state.roomId === 0) {
      return (
      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp}/>
        <Banner />
         <h1>Welcome {this.state.email}</h1>
          <JoinRoom handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
      </section>
    )}

    if (this.state.registered === 1 && this.state.roomId >= 1) {
      return (
      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp}/>
        <Banner />
         <h1>Welcome {this.state.email}</h1>
        <Room RoomId={this.state.roomId}/>
      </section>
    )}



    // return (
    //   <section className="main">
    //     <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp}/>
    //     <Banner />
    //     {form}
    //     {register}
    //     {tokenIn}
    //   </section>
    // )
  }
}
