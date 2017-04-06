// ***************
// *MOBILE CLIENT*
// ***************

const io = require('socket.io-client')
const axios = require('axios');
import React, {Component} from 'react';
import Banner from './Banner.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import JoinRoom from './JoinRoom.jsx';
import NavigationBar from './NavigationBar.jsx';
import Room from './Room.jsx';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Footer from './Footer.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignIn: false,
      showSignUp: false,
      registered: 0,
      isLoggedIn: false,
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      token: '',
      roomId: 0,
      showModal: false
    };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleClickSignIn = this.handleClickSignIn.bind(this);
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickLoggedOut = this.handleClickLoggedOut.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }


  componentDidMount () {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      axios.post('http://legendsoftrivia.com:80/login', {
        token: token
      }).then( (res) => {
        const jsObj = JSON.parse(res.request.response);
        console.log(jsObj);
        if(!jsObj.isLoggedIn){
          localStorage.removeItem('token');
          localStorage.removeItem('username');
        }
        this.setState({ isLoggedIn: jsObj.isLoggedIn, username: jsObj.username });
      }).catch( (err) => {
        console.log(err);
      });
    }
  }

  get handleRegisterChange() {
    return (e) => {
      console.log(e.target);
      this.setState({ [e.target.name]: e.target.value})
    };
  }

  handleRegisterSubmit (e) {
    e.preventDefault();

    // TODO: check passwords are the same
    axios.post('http://legendsoftrivia.com:80/register', {
      username: this.state.username,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password
    }).then( (res) => {
      const token = JSON.parse(res.request.response);
      console.log('back', token.token);
      localStorage.setItem('token', token.token)
      this.setState({ registered: 1});
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

    axios.post('http://legendsoftrivia.com:80/login', {
      email: this.state.email,
      password: this.state.password
    }).then( (res) => {
      console.log(res);
        const jsObj = JSON.parse(res.request.response);
        localStorage.setItem('token', jsObj.token);
        localStorage.setItem('username', jsObj.username);
        console.log()
        this.setState({
          username: jsObj.username,
          token: jsObj.token,
          isLoggedIn: true
        });
        console.log(this.state);
    }).catch( (err) => {
      console.log(err);
    });
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      const roomNumber = event.target.value;
      console.log('enter');

      axios.post('http://legendsoftrivia.com:80/joinroom', {
        room: roomNumber,
        username: this.state.username
      }).then( (res) => {
        const jsObj = JSON.parse(res.request.response);
        console.log('back', jsObj);
        this.setState({ token: jsObj.token, roomId: roomNumber});
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClickLoggedOut() {
    console.log('Clicked');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.setState({isLoggedIn: false});
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const showSignIn = this.state.showSignIn;
    const showSignUp = this.state.showSignUp;
    const logged = this.state.registered;

    let login = null;
    if (showSignIn) {
      login = <SignIn email={this.state.email} password={this.state.password} handleSignInSubmit={this.handleSignInSubmit} handleChange={this.handleRegisterChange} />;
    } else {
      login = null;
    }

    let register = null;
    if (showSignUp) {
      register = <SignUp password_confirmation={this.state.password_confirmation} password={this.state.password} email={this.state.email} last_name={this.state.last_name} first_name={this.state.first_name} username={this.state.username} handleSubmit={this.handleRegisterSubmit} handleChange={this.handleRegisterChange} />;
    } else {
      register = null;
    }

    // TODO: if token is present render out "logged in page", render the logout on nav and join room.
    if (this.state.isLoggedIn === false) {
      return (
      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp} isLoggedIn={this.state.isLoggedIn} />
        <Banner />
        {login}
        {register}

        <div className="button-modal">

          <Button
            bsStyle="primary"
            bsSize="large"
            id="front"
            onClick={this.open}
          >
            How to Play!
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Legends of Trivia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>How to play:</h4>
              <hr />
              <p> Minimum two players to start the game.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Footer />
      </section>
    )}

    if (this.state.isLoggedIn === true && this.state.roomId === 0) {
      return (
      <section className="main">
        <NavigationBar handleClickSignIn={this.handleClickSignIn} handleClickSignUp={this.handleClickSignUp} handleClickLoggedOut={this.handleClickLoggedOut} getUsername={this.state.username}/>
        <Banner />
          <JoinRoom handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
        <Footer />
      </section>
    )}

    if (this.state.isLoggedIn === true && this.state.roomId >= 1) {
      return (
      <section className="main">
        <Room RoomId={this.state.roomId} token={this.state.token} />
        <Footer />
      </section>
    )}

  }
}
