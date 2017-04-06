import React, {Component} from 'react';

export default class GameEnd extends Component {

  render() {
    document.getElementById("background-screen").className = "background-GameEnd";
    return (
      <div>
        <h1> Game Over </h1>
    {Object.keys(this.props.usersScores).map( (key)=>{
      return (
        <div>
          <h2>  {key} : {this.props.usersScores[key]} </h2>
        </div>
      )
    }).sort()}
    </div>
  )}
}