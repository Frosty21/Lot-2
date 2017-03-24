const io = require('socket.io-client')
import React, {Component} from 'react';
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
      roomId: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.socket = io('http://localhost:3001');
  }
  
  componentDidMount() {
    this.socket.on('data', (data) => {
      console.log('componentDidMount: ', data);
    });
  }
  
  handleClick() {
    console.log('handleClick');
    this.socket.emit('data');
    this.setState({ connectionData: "test"})
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      console.log('enter');
      this.socket.emit('data', event.target.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Room handleSubmit={this.handleSubmit} handleKeyPress={this.handleKeyPress} handleClick={this.handleClick} />
      </div>
    )
  }
}