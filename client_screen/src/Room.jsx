const io = require('socket.io-client')
import React, {Component} from 'react';
import GameLoad from './GameLoad.jsx';
import GamePlay from './GamePlay.jsx';
import GameEnd from './GameEnd.jsx';
import Player from './Player.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      gameId: 0,
      roundNumber: 0,
      roundLeft: 0,
      gameQuestion: '',
      gameAnswers: [],
      startGame: false,
      gameEnd: false
      // gameQuestion['Question', 'RightAnswer', 'WrongAnswer1', 'WrongAnswer2', 'WrongAnswer3]
    }
    this.socket = io.connect('http://localhost:3002', {
      query: 'token=' + this.props.token,
      'force new connection': true
    });
  }

  componentDidMount () {

    const room = this.props.RoomId;

    this.socket.emit('join', {room: room });

    this.socket.on('users', data => {
      console.log('users list: ', data);
      this.setState({ users: data.users });
    });

    this.socket.on('gameStarted', (data) => {
      this.setState({ gameId: data.gameId });
    });

    this.socket.on('roundChange', (data) => {
      console.log('Screen: round change: ', data.gameQuestion);
      this.setState({ startGame: true, gameQuestion: data.gameQuestion, gameAnswers: data.gameAnswers, roundNumber: data.roundNumber });
    });

    this.socket.on('gameEnded', (data) => {
      console.log('GAME END: ', data);
      this.setState({ gameEnd: true});
    });
  }

  render() {
    // TODO: add a delay using react-delay-render module, maybe...
    if ( this.state.startGame === false && this.state.gameEnd === false) {
        return (
          <GameLoad Users={this.state.users} RoomId={this.props.RoomId} />
        )
    }
    // TODO: Show all User Cards in a loading screen, suspense is good, use react-delay-render
    if ( this.state.startGame === true && this.state.gameEnd === false) {
      return (
          <GamePlay Users={this.state.users} gameQuestion={this.state.gameQuestion} RoundNumber={this.state.roundNumber} gameAnswers={this.state.gameAnswers} />
      )
    }
    if ( this.state.gameEnd === true ) {
      return (
          <GameEnd Users={this.state.users} />
      )
    }
  }
}