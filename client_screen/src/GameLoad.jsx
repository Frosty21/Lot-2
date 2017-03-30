import React, {Component} from 'react';
import Avatar from 'react-avatar';
// import GamePlay from './GamePlay.jsx';
export default class GameLoad extends Component {

  render() {
    return(
      <div>
       <h1> GameLoad </h1>
        <Preload/>
        <div className="avatarWrapper">
            <Avatar className="avatar" name="Wim Mostmans" />
        </div>
        <div>
          <h1>You have joined Room {this.props.RoomId}</h1> <br />
          <button onClick={this.props.handleClick}>Start G4me</button>
          <p>.. From here, we show users joining, and next component is the Game + Questions</p>
        </div>
      </div>

    )
  }
}
var Preload = React.createClass({
  render: function(){
    return(
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
        <p className="preloading-text" ><i>Waiting for Game to start...</i></p>
        {/*<Avatar title="Javier" image="https://placeimg.com/80/80/animals" />*/}
      </div>
    </div>
    )
  }
})
