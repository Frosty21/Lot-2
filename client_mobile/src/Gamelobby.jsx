import React, {Component} from 'react';

export default class Gamelobby extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClickStartGame}>START</button>
        <div className="back-button">
          <button type="button" className="btn btn-link">Back to Menu</button>
        </div>
      </div>
    )
  }
}