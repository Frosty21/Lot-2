import React, {Component} from 'react';
import endParty from './partyexplode-gameEnd.js';

export default class GameEnd extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  
  componentDidMount() {
    if (this.state.loading){
      endParty();
    }
  }

  render() {
    document.getElementById("background-screen").className = "background-GameEnd";
    return(
      <div>
        <h1> Game Over </h1>
        <canvas id="drawing_canvas"></canvas>
      </div>
    )
  }
}

var PartyPreloader = React.createClass({
  render: function(){
    return(
      <div>
        <script>Partyexplode</script>
        <canvas id="drawing_canvas"></canvas>
      </div>
      )
  }
});