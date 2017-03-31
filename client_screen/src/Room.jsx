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
      gameQuestion: {},
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
      console.log('Data: ',data);
      console.log('Screen ...GameStarted');
      this.setState({ gameId: data.gameId });
    });

    this.socket.on('roundChange', (data) => {
      console.log('MOBILE: round change: ', data.gameQuestion);
      this.setState({ startGame: true, gameQuestion: data.gameQuestion, roundNumber: data.roundNumber });
    });

    this.socket.on('gameEnded', (data) => {
      console.log('GAME END: ', data);
      this.setState({ gameEnd: true});
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
          <GamePlay gameQuestion={this.state.gameQuestion} RoundNumber={this.state.roundNumber} />
      )
    }
    if ( this.state.gameEnd === true ) {
      return (
          <GameEnd />
      )
    }
  }
}