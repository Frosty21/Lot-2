import React, {Component} from 'react';
// import Avatar from 'react-avatar';
import Gravatar from 'react-gravatar';
import BackgroundImage from 'react-background-image-loader';

export default class GameLoad extends Component {

  render() {
    document
      .getElementById('background-screen')
      .className = 'background-GameLoad';
    return (
      <div>
        <h1>
          GameLoad
        </h1>
        <Preload/>
        <br/>
        <div className="avatarWrapper">
          <Gravatar email="nathan.froese21@gmail.com" name="nathan froese"/>
        </div>
        <div>
          <h1>You have joined Room {this.props.RoomId}</h1>
          <br/>
        </div>
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
