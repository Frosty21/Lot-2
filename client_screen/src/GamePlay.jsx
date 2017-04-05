import React, {Component} from 'react';

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

                    <div className="answers-box">

                      <div className="answer">
                       <p> This is answer 1. </p>
                      </div>

                      <div className="answer">
                       <p> This is answer 2. </p>
                      </div>

                      <div className="answer">
                       <p> This is answer 3. </p>
                      </div>

                      <div className="answer">
                       <p> This is answer 4. </p>
                      </div>

                    </div>
                  </div>
              </div>
              <div className="col2">
              </div>
              <div className="col3">
              </div>
          </div>
      </div>
  </div>
</div>
</div>

  )}
}