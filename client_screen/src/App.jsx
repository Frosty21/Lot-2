const axios = require('axios');
import React, {Component} from 'react';
import JoinRoom from './JoinRoom.jsx';
import Room from './Room.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      scores: [],
      startTime: 0,
      endTime: 0,
      gameId: 0,
      roomId: 0,
      loadTimer: 10,
      gameEnd: 0,
      startGame: 0,
      token: ''
    };
    this.handleClickPlay = this.handleClickPlay.bind(this);
    this.handleClickUser = this.handleClickUser.bind(this);  
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClickUser(e){
    console.log(e);
    let newUser = this.state.users;
    this.setState({ users: newUser.concat('user') })
  }

  handleClickPlay(e){
    console.log(e);
    this.setState({ startGame: 1 });
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
    if( this.state.roomId == 0 ){
      return (
        <div>
          <JoinRoom handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} />
        </div>
      )    
    } else if( this.state.roomId >= 1 ){
      return (
        <div>
          <Room token={this.state.token} startGame={this.state.startGame} gameEnd={this.state.gameEnd} handleClickPlay={this.handleClickPlay} handleClickUser={this.handleClickUser} LoadTimer={this.state.loadTimer} RoomId={this.state.roomId} Users={this.state.users} Scores={this.state.scores} StartTime={this.state.startTime} EndTime={this.state.endTime} GameId={this.state.gameId} />
        </div>
      )
    }
  }
}