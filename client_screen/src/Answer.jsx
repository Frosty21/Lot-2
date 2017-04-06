import React, {Component} from 'react';

export default class Answer extends Component {

  render() {
        return (
            <div className="answers-box">
            {
                (this.props.gameAnswers).map( (answer, i)=> {
                    if (this.props.gameAnswers[0] === answer) {
                    return (
                        <div className="answer" key={i}>
                            {answer}
                             <br /><br />
                          <img src={require('../img/A.png')} height="50" width="50" />
                        </div>
                    )   
                    }
                    if (this.props.gameAnswers[1] === answer) {
                    return (
                        <div className="answer" key={i}>
                          {answer}
                           <br /><br />
                          <img src={require('../img/B.png')}  height="50" width="50" />
                        </div>
                    )   
                    }
                    if (this.props.gameAnswers[2] === answer) {
                    return (
                        <div className="answer" key={i}>
                          {answer}
                            <br /><br />
                          <img src={require('../img/C.png')}  height="50" width="50" />
                        </div>
                    )   
                    }
                    if (this.props.gameAnswers[3] === answer) {
                    return (
                        <div className="answer" key={i}>
                          {answer}
                          <br /><br />
                          <img src={require('../img/D.png')}  height="50" width="50" />
                        </div>
                    )   
                    }
                })}
            </div>
        );
  }
}
