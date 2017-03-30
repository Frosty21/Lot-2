import React, {Component} from 'react';
import endParty from './components/partyexplode-gameEnd.js';

export default class GameEnd extends Component {
    constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  
    componentDidMount() {
    if(this.state.loading) {
      endParty();
    }
  }
  render() {
    const PartyEnd = () => {
      if(this.state.loading) {
        return(
          <div>     
            <canvas id="drawing_canvas"></canvas> 
          </div>
        )
      }
      return (null);
    }

    return(
      <div>
        <h1> Game Over </h1>
        <PartyEnd/>
      </div>
    )
  }
}

var PartyPreloader = React.createClass({
  
  render: function(){
    return(
      <div>
        <script>Partyexplode</script>
        <canvas className="drawing_canvas"></canvas>
      </div>
      )
  }
})