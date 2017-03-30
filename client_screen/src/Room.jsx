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
      curRound: 0,
      maxRound: 5,
      gameQuestion: [],
      startGame: 0,
      gameEnd: 0
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
      if (data.player && data.player.length > 0){
        const play = this.state.players;
        this.setState({ players: play.concat(data.player) });
      } else if (data.gameId > 0 && this.state.gameId <= 0) {
        this.setState({ gameId: data.gameId})
      } else if (data.curRound > 0 && this.state.curRound <= this.state.maxRound && data.gameQuestion.length === 4) {
        // Will have questions and answers with current round
        this.setState({
          curRound: data.curRound,
          gameQuestion: data.gameQuestion
        });
      }
    }).on('disconnect', () => {
      console.log('disconnected');
    });
  }

  handleClick(){
    console.log("clicked");
    this.setState({ startGame: 1 });
  }


  render() {
    // TODO: add a delay using react-delay-render module, maybe...
    if ( this.state.startGame <= 0 && this.state.gameEnd <= 0) {
        return (
          <GameLoad RoomId={this.props.RoomId} handleClick={this.handleClick}/>
        )
    }
    // TODO: Show all User Cards in a loading screen, suspense is good, use react-delay-render
    if ( this.state.startGame >= 1 && this.state.gameEnd <= 0) {
      return (
          <GamePlay />
      )
    }
    if ( this.props.gameEnd == 1 ) {
      return (
          <GameEnd />
      )
    }
  }
}