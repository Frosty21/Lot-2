import React, {Component} from 'react';

export default class JoinRoom extends Component {

  render() {
    document.getElementById('background-screen').className = 'background-JoinRoom';
    return (
      <main className="room">
        <div className="title">
         <h1>Legends of Trivia</h1>
        </div>
        <div className="room-choose">
          <form onSubmit={this.props.handleSubmit}>
            <label>
              <br/>
              <input id="room-input" placeholder="Enter Room Number" type='number' value={this.props.value} onKeyPress={this.props.handleKeyPress} />
            </label>
          </form>
        </div>
      </main>
    )
  }
}