import React, {Component} from 'react';

export default class GamePlay extends Component {
// TODO: Warning message wipe
  render() {
    return (
      <div>
    {Object.keys(this.props.gameQuestion).map( (key)=>{
      return (
        <div>
            {key} : {this.props.gameQuestion[key]}
        </div>
      )
    }).sort(function (a, b) {return Math.random() - 0.5;})}
    </div>
  )}
}