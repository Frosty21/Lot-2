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
      gameQuestion: []
      // gameQuestion['Question', 'RightAnswer', 'WrongAnswer1', 'WrongAnswer2', 'WrongAnswer3]
    }
    this.socket = io.connect('http://localhost:3001', {
      query: 'token=' + this.props.token
    });
  }

  componentDidMount () {
    const room = this.props.RoomId;
    console.log(room);
    this.socket.emit(room, "I'm ready to receive data..");

    this.socket.on(room, (data) => {
      console.log(data);
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
  
  render() {
    // TODO: add a delay using react-delay-render module, maybe...
    if ( this.props.startGame <= 0 ) {

        return (
          <div>
            <h1>You have joined Room {this.props.RoomId}</h1> <br />
            <h3>We require a minimum of 4 Users to join...[{this.state.players.length}]</h3>
            <button onClick={this.props.handleClickUser}>Add Us3r</button>
            <button onClick={this.props.handleClickPlay}>Start G4me</button>
            <p>.. From here, we show users joining, and next component is the Game + Questions</p>
            <p>Token: {this.props.token}</p>
  
          </div>
        )

    }
    // TODO: Show all User Cards in a loading screen, suspense is good, use react-delay-render
    if ( this.props.startGame >= 1 && this.props.LoadTimer >= 0) {
      return (
        <div>
          <GameLoad />
        </div>
      )
    }
    if ( this.props.startGame >= 1 && this.props.LoadTimer <= 0 ) {
      return (
        <div>
          <GamePlay gameEnd={this.props.gameEnd}/>
        </div>
      )
    }
    if ( this.props.gameEnd == 1) {
      return (
        <div>
          <GameEnd />
        </div>
      )
    }
  }
}