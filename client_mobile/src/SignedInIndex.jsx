import React, {Component} from 'react';

export default class SignedInIndex extends Component {
  render() {
    return (
          <form onSubmit={this.props.handleSubmit}>
            <label>
              Enter Game Room:<br />
              <input id="room-input" type='number' value={this.props.value} onKeyPress={this.props.handleKeyPress} />
            </label>
          </form>
    )
  }
}