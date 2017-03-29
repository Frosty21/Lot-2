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
            <Avatar className="avatar" name="Wim Mostmans" size="40" />
        </div>
      </div>
    )
  }
}
var Preload = React.createClass({
  render: function(){
    return(

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
    )
  }
})
