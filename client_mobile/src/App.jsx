const io = require('socket.io-client')
import React, {Component} from 'react';
import ChildFirst from './ChildFirst.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstArray: [
        {
          key: 'value',
          whereis: 'bobbyfisher'
        },
        {
          key: 'value2',
          whereis: 'notbobbyfisher'
        }
      ]
    };
    this.socket = io('http://localhost:3001');
  }

    componentDidMount() {
  }

  render() {
    return (
      <div>
        <ChildFirst ChildFirstList={this.state.firstArray}/>
        <h1> HEY THIS IS APP!</h1>
        <h1> Mobile </h1>
      </div>
    )
  }
}
