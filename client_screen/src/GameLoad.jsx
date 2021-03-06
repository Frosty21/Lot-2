import React, {Component} from 'react';
// import Avatar from 'react-avatar';
import Avatar from 'react-avatar';

export default class GameLoad extends Component {

  render() {
    document
      .getElementById('background-screen')
      .className = 'background-GameLoad';
    return (
      <div>
        <h1>
          Legends of Trivia
        </h1>
        <Preload />
        <div>
          <h2>Waiting for players to Join Room #{this.props.RoomId}</h2>
        </div>
        {/*<div className="avatarWrapper">
          <Avatar twitterHandle="nathanfroese21"/>
          <Avatar twitterHandle="xopt1x" />
          <Avatar twitterHandle="don_burks" />
          <Avatar name="not marry poppins"/>
        </div>*/}
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