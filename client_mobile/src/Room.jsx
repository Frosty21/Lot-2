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
      isDisabled: '',
      buttonsLocked: false,
      startGame: 0,
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username')
    }
    this.handleClickAnswerA= this.handleClickAnswerA.bind(this);
    this.handleClickAnswerB= this.handleClickAnswerB.bind(this);
    this.handleClickAnswerC= this.handleClickAnswerC.bind(this);
    this.handleClickAnswerD= this.handleClickAnswerD.bind(this);
    this.gameRoundLogic = this.gameRoundLogic.bind(this);
    this.handleClickStartGame = this.handleClickStartGame.bind(this);
    this.socket = io.connect('http://localhost:3002', {
      query: 'token=' + this.state.token
    });
  }

  componentDidMount () {
    const room = this.props.RoomId;
    const username = this.state.username;
    this.socket.emit('join', {room: room , username: username });

    this.socket.on('gameStarted', data => {
      if(data){
        this.setState({ startGame: 1 });
      }
    });

    this.socket.on('roundChange', data => {
      this.setState({ buttonsLocked: false });
    });
  }

  handleClickAnswerA() {
    this.socket.emit('answer', {answer: 'a', username: this.state.username});
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerB() {
    this.socket.emit('answer', {answer: 'b', username: this.state.username});
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerC() {
    this.socket.emit('answer', {answer: 'c', username: this.state.username});
    this.setState({ buttonsLocked: true })
  }

  handleClickAnswerD() {
    this.socket.emit('answer', {answer: 'd', username: this.state.username});
    this.setState({ buttonsLocked: true })
  }

  handleClickStartGame() {
    console.log("Start");
    this.socket.emit('gameStart', this.props.RoomId);
    this.setState({ startGame: 1});
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
            buttonLock={this.state.buttonsLocked}
            // disabled={this.state.isDisabled}
            answerA={this.handleClickAnswerA}
            answerB={this.handleClickAnswerB}
            answerC={this.handleClickAnswerC}
            answerD={this.handleClickAnswerD}
            handleClickStartGame={this.handleClickStartGame}/>
      )
    }
    if ( this.state.gameEnd >= 1 ) {
      return (
          <GameEnd />
      )
    }
  }
}
