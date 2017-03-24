import React, {Component} from 'react';

export default class ChildLast extends Component {
  render() {
    return (
        <div className="child">
          <span className="child-content">{this.props.whereis}</span>
          <h3>This is child last</h3>
        </div>
    )
  }
}