import React, {Component} from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className="child">
          <Button className="btn btn-lg btn-success center-block" role="button">A</Button>
          <Button className="btn btn-lg btn-success center-block" role="button">B</Button>
          <Button className="btn btn-lg btn-success center-block" role="button">C</Button>
          <Button className="btn btn-lg btn-success center-block" role="button">D</Button>
      </div>
    )
  }
}