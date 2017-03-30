import React, {Component} from 'react';

export default class GamePlay extends Component {
  render() {
    // Render Questions, Answers, Users, UserScore, UserAnswer
    return(

    <section className="main">
      <div className="jumbotron vertical-center">
        <div className="container text-center">
          <p>Scream for no reason at 4 am attack the dog then pretend like nothing happened chew foot ?</p>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-heading">Panel heading without title</div>
        <div className="panel-body">
          A: Answer A
        </div>
        <div className="panel-body">
          B: Answer B
        </div>
        <div className="panel-body">
          C: Answer C
        </div>
        <div className="panel-body">
          D: Answer D
        </div>
      </div>

    </section>
    )
  }
}