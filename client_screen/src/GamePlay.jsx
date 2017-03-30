import React, {Component} from 'react';

export default class GamePlay extends Component {
  render() {
    // Render Questions, Answers, Users, UserScore, UserAnswer
    return(

    <section className="main">
      <div className="jumbotron vertical-center">
        <div className="container text-center">
          <h1>Trivia101</h1>
        </div>
      </div>

    <div className="timer-in-game">
      <div className="panel panel-default">
        <div className="panel-heading">Time Left</div>
        <div className="panel-body">5 Seconds</div>
      </div>
    </div>

    </section>
    )
  }
}