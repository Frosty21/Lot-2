import React, {Component} from 'react';
// import Avatar from 'react-avatar';
import Gravatar from 'react-gravatar';

export default class GameLoad extends Component {

  render() {
    document
      .getElementById('background-screen')
      .className = 'background-GameLoad';
    return (
      <div>
      <section>
      <div>
        <h1>
          Legends of Trivia
        </h1>
        <Preload />
        <br/>
        <div className="avatarWrapper">
          <Gravatar email="nathan.froese21@gmail.com" name="nathan froese"/>
        </div>
      </div>
      <h2>Waiting for players to Join Room #{this.props.RoomId}</h2>
      </section>
      </div>
    )
  }
}

var Preload = React.createClass({
  render: function () {
    return (
      <div>
        <div className="global">
          <div className="preloading-top mask">
            <div className="plane"></div>
          </div>
          <div className="preloading-middle mask">
            <div className="plane"></div>
          </div>

          <div className="preloading-bottom mask">
            <div className="plane"></div>
          </div>
          <div>
            <p className="preloading-text">
              <i></i>
            </p>
          </div>
        </div>
      </div>
    )
  }
})