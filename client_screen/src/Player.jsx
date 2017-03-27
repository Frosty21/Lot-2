import React, {Component} from 'react';

export default class Player extends Component {
  render() {
    return(
      <div>
        <h3>User: {this.props.item} </h3>
      </div>
    )
  }
}