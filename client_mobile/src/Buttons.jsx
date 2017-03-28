import React, {Component} from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className="child">
          <button className="btn btn-lg btn-success center-block" role="button">A</button>
          <button className="btn btn-lg btn-success center-block" role="button">B</button>
          <button className="btn btn-lg btn-success center-block" role="button">C</button>
          <button className="btn btn-lg btn-success center-block" role="button">D</button>
      </div>
    )
  }
}