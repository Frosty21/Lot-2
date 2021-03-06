import React, {Component} from 'react';

export default class JoinRoom extends Component {
  render() {
    return (
          <form onSubmit={this.props.handleSubmit}>
            <label>
              Join Room:<br />
              <input id="room-input" className="form-control" type='number' value={this.props.value} onKeyPress={this.props.handleKeyPress} />
            </label>
          </form>
    )
  }
}