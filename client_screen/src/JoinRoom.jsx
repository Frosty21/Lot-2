import React, {Component} from 'react';

export default class JoinRoom extends Component {

  render() {
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