const io = require('socket.io-client')
import React, {Component} from 'react';
import GameLoad from './GameLoad.jsx';
import GamePlay from './GamePlay.jsx';
import GameEnd from './GameEnd.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.socket = io.connect('http://localhost:3001', {
      query: 'token=' + this.props.token
    });
  }

  componentDidMount () {
    this.socket.on('data', (data) => {
      console.log(data);
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
          <h3>We require a minimum of 4 Users to join...[{this.props.Users.length}]</h3>
          <button onClick={this.props.handleClickUser}>Add User</button>
          <button onClick={this.props.handleClickPlay}>Start Gsme</button>
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