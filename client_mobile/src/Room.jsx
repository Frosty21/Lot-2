const io = require('socket.io-client')
import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state= {
      answerA: false,
      answerB: false,
      answerC: false,
      answerD: false,
      isDisabled: '',
      token: localStorage.getItem('token')
    }
    this.handleClickAnswerA= this.handleClickAnswerA.bind(this);
    this.handleClickAnswerB= this.handleClickAnswerB.bind(this);
    this.handleClickAnswerC= this.handleClickAnswerC.bind(this);
    this.handleClickAnswerD= this.handleClickAnswerD.bind(this);

    this.socket = io.connect('http://localhost:3002', {
      query: 'token=' + this.state.token
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

  handleClickAnswerA() {
    console.log("This answer A was pressed");
    this.socket.emit('answer', 'a');
    this.setState({answerA : true, isDisabled : 'disabled'});
  }

  handleClickAnswerB() {
    console.log("This answer B was pressed");
    this.socket.emit('answer', 'b');
    this.setState({answerB : true, isDisabled : 'disabled'});
  }

  handleClickAnswerC() {
    console.log("This answer C was pressed");
    this.socket.emit('answer', 'c');
    this.setState({answerC : true, isDisabled : 'disabled'});
  }

  handleClickAnswerD() {
    console.log("This answer D was pressed");
    this.socket.emit('answer', 'd');
    this.setState({answerD : true, isDisabled : 'disabled'});
  }

  render() {
    return (
      <div>
        <Buttons
          disabled={this.state.isDisabled}
          answerA={this.handleClickAnswerA}
          answerB={this.handleClickAnswerB}
          answerC={this.handleClickAnswerC}
          answerD={this.handleClickAnswerD}/>
      </div>
    )
  }
}
