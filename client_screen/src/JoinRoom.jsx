import React, {Component} from 'react';

export default class JoinRoom extends Component {

  render() {
    document.getElementById('background-screen').className = 'background-JoinRoom';
    return (
      <main className="room">
        <div className="room-choose">
          <form onSubmit={this.props.handleSubmit}>
            <label>
              New Room:<br />
              <input id="room-input" type='number' value={this.props.value} onKeyPress={this.props.handleKeyPress} />
            </label>
          </form>
        </div>
      </main>
    )
  }
}