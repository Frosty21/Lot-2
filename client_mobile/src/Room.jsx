import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.socket = io.connect('http://localhost:3001', {
    //   query: 'token=' + this.props.token
    // });
  }

  componentDidMount() {

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