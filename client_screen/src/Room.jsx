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
      players: [ { name: 'ermis'}, {name: 'robert' } ],
      gameId: 0,
      roundNumber: 0,
      roundLeft: 0,
      gameQuestion: [],
      startGame: false,
      gameEnd: false
      // gameQuestion['Question', 'RightAnswer', 'WrongAnswer1', 'WrongAnswer2', 'WrongAnswer3]
    }
    this.handleClick = this.handleClick.bind(this);
    this.socket = io.connect('http://localhost:3002', {
      query: 'token=' + this.props.token,
      'force new connection': true
    });
  }

  componentDidMount () {
    const room = this.props.RoomId;

    this.socket.emit('join', {room: room });
    this.socket.emit(room, "I'm ready to receive data..");

    this.socket.on(room, (data) => {
      console.log(data);
      this.socket.emit('message', 'Im THE SCREEN!');
    }).on('disconnect', () => {
      console.log('disconnected');
    });

    this.socket.on('gameStarted', (data) => {
      this.setState({ startGame: true, gameId: data.gameId });
    });

    this.socket.on('roundChange', (data) => {
      this.setState({ gameQuestion: data.gameQuestion, roundNumber:  data.roundNumber });
    });
  }

  handleClick(){
    console.log("clicked");
    this.setState({ startGame: 1 });
  }


  render() {
    // TODO: add a delay using react-delay-render module, maybe...
    if ( this.state.startGame === false && this.state.gameEnd === false) {
        return (
          <GameLoad RoomId={this.props.RoomId} handleClick={this.handleClick}/>
        )
    }
    // TODO: Show all User Cards in a loading screen, suspense is good, use react-delay-render
    if ( this.state.startGame === true && this.state.gameEnd === false) {
      return (
          <GamePlay GameQuestion={this.state.gameQuestion} />
      )
    }
    if ( this.props.gameEnd === true ) {
      return (
          <GameEnd />
      )
    }
  }
}