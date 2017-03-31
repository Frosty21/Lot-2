import React, {Component} from 'react';

export default class GamePlay extends Component {

  render() {
    return (
      <div>
    {Object.keys(this.props.gameQuestion).map( (key)=>{
      return (
        <div>
            {key} : {this.props.gameQuestion[key]}
        </div>
      )
    })}
    </div>
  )}
}