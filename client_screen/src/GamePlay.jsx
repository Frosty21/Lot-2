import React, {Component} from 'react';
import Answer from './Answer.jsx';

export default class GamePlay extends Component {
// TODO: Warning message wipe
  render() {
    document.getElementById('background-screen').className = 'background-GamePlay';
    return (
<div>
  <div className="question-number">
    <p className="question-number-text">Question 1</p>
  </div>

  <div className="timer-number">
    <p className="question-number-text">Timer</p>
  </div>

  <div id="wrapper">
    <div id="header">

    </div>
    <div className="colmask holygrail">
        <div className="colmid">
            <div className="colleft">
                <div className="col1wrap">
                    <div className="col1">
                      <div className="question-box">
                        <p className="question"> Question: What is the squareRoot of blank in the desert? </p>
                      </div>

                      <Answer gameAnswers={this.props.gameAnswers}/>

                    </div>
                </div>
                <div className="col2">
                  <div className="user">
                    <p> User 1 </p>
                    <span> Score: 0/5 </span>
                  </div>

                  <div className="user">
                    <p> User 2 </p>
                    <span> Score: 0/5 </span>
                  </div>
                </div>
                <div className="col3">
                  <div className="user">
                    <p> User 3 </p>
                    <span> Score: 0/5 </span>
                  </div>

                  <div className="user">
                    <p> User 4 </p>
                    <span> Score: 0/5 </span>
                  </div>

                </div>
            </div>
        </div>
    </div>
  </div>
</div>

  )}
}