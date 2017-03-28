const io = require('socket.io-client')
import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
 
    this.socket = io.connect('http://localhost:3002', {
      query: 'token=' + this.props.token
    });
  }

  componentDidMount () {
    const room = this.props.RoomId;
    console.log('Mobile: room: ', room)
    this.socket.emit('join', {room: room });
    this.socket.emit(room, "I'm ready to receive data..");

    this.socket.on(room, (data) => {
      console.log('Mobile: data: ', data);
      this.socket.emit('message', 'Im THE CLIENT!');
    }).on('disconnect', () => {
      console.log('disconnected');
    });
  }

  render() {
    return (
      <div>
        <h1>You have joined {this.props.RoomId}</h1>
        <Buttons />
      </div>
    )
  }
}