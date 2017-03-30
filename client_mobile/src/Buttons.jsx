import React, {Component} from 'react';

export default class Buttons extends Component {

  render() {
    return (
      <div className="gameButtons">
          <button disabled={this.props.disabled} className="btn btn-lg btn-success center-block" role="button" name="answerA" onClick={this.props.answerA}>A</button>
          <button disabled={this.props.disabled} className="btn btn-lg btn-success center-block" role="button" name="answerB" onClick={this.props.answerB}>B</button>
          <button disabled={this.props.disabled} className="btn btn-lg btn-success center-block" role="button" name="answerC" onClick={this.props.answerC}>C</button>
          <button disabled={this.props.disabled} className="btn btn-lg btn-success center-block" role="button" name="answerD" onClick={this.props.answerD}>D</button>
      </div>
    )
  }
}