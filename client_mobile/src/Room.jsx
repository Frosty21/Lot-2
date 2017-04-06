const io = require('socket.io-client')
import React, {Component} from 'react';
import Buttons from './Buttons.jsx';
import Gamelobby from './Gamelobby.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state= {
      answerA: false,
      answerB: false,
      answerC: false,
      answerD: false,
      buttonsLocked: false,
      startGame: 0,
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username')
    }

    this.handleClickAnswerA= this.handleClickAnswerA.bind(this);
    this.handleClickAnswerB= this.handleClickAnswerB.bind(this);
    this.handleClickAnswerC= this.handleClickAnswerC.bind(this);
    this.handleClickAnswerD= this.handleClickAnswerD.bind(this);
    this.handleClickStartGame = this.handleClickStartGame.bind(this);

    this.socket = io.connect('http://legendsoftrivia.com:80', {
      query: 'token=' + this.state.token,
      'force new connection': true
    });


  }

  componentDidMount () {

    const room = this.props.RoomId;

    this.socket.emit('join', { room: room });

    this.socket.on('users', data => {
      console.log('users list: ', data);
    });

    this.socket.on('clientGameStarted', () => {
      this.setState({ startGame: 1 });
    });

    this.socket.on('resetButtons', (data) => {
      this.setState({ buttonsLocked: false });
    });

    this.socket.on('gameEnded', (data) => {
      console.log('GAME END: ', data);
    });
  }


  handleClickAnswerA() {
    if ( this.state.buttonsLocked === false){
      this.socket.emit('answer', {answer: 'a', username: this.state.username});
      console.log("button pressed");
    }
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerB() {
    if ( this.state.buttonsLocked === false){
      this.socket.emit('answer', {answer: 'b', username: this.state.username});
      console.log("button pressed");
    }
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerC() {
    if ( this.state.buttonsLocked === false){
      this.socket.emit('answer', {answer: 'c', username: this.state.username});
      console.log("button pressed");
    }
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerD() {
    if ( this.state.buttonsLocked === false){
      this.socket.emit('answer', {answer: 'd', username: this.state.username});
      console.log("button pressed");
    }
    this.setState({ buttonsLocked: true })
  }

  handleClickStartGame() {
    console.log("Start");
    this.socket.emit('gameStart', this.props.RoomId);
    this.setState({ startGame: 1 });
  }

  render() {
    if ( this.state.startGame <= 0) {
        return (
          <Gamelobby handleClickStartGame={this.handleClickStartGame} />
        )
    }
    if ( this.state.startGame >= 1) {
      return (
          <Buttons
            answerA={this.handleClickAnswerA}
            answerB={this.handleClickAnswerB}
            answerC={this.handleClickAnswerC}
            answerD={this.handleClickAnswerD}
            handleClickStartGame={this.handleClickStartGame} />
      )
    }
    if ( this.state.gameEnd >= 1 ) {
      return (
          <GameEnd />
      )
    }
  }
}
