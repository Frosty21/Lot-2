import React, {Component} from 'react';

export default class GamePlay extends Component {
  render() {
    // Render Questions, Answers, Users, UserScore, UserAnswer
    return(

    <section class="main">
      <div class="jumbotron vertical-center">
        <div class="container text-center">
          <h1>Trivia101</h1>
        </div>
      </div>

    <div class="timer-in-game">
      <div class="panel panel-default">
        <div class="panel-heading">Time Left</div>
        <div class="panel-body">5 Seconds</div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            <span class="sr-only">50% Complete</span>
          </div>
        </div>
      </div>
    </div>


      <div class="users-in-lobby">

      <div class="row">

        <div class="col-sm-4">
          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-name">Ermis</h4>
              <p class="card-score">Score: 2/5</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-name">Rob</h4>
              <p class="card-statistics">Score: 3/5</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-name">Nate</h4>
              <p class="card-statistics">Score: 4/5</p>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
    )
  }
}