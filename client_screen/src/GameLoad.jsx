import React, {Component} from 'react';
export default class GameLoad extends Component {

  render() {
    return(
      <div>
        <h1> GameLoad </h1>
        <Preload/>
      </div>
    )
  }
}
var Preload = React.createClass({
  render: function(){
    return(

      <div id="global">

        <div className="preloading-top mask">
          <div className="plane"></div>
        </div>
        <div className="preloading-middle mask">
          <div className="plane"></div>
        </div>

        <div className="preloading-bottom mask">
          <div className="plane"></div>
        </div>
        <p className="preloading-text" ><i>LOADING...</i></p>

      </div>
    )
  }
})
