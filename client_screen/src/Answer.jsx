import React, {Component} from 'react';

export default class Answer extends Component {
  render() {
        return (
            <div className="answers-box">
            {
                (this.props.gameAnswers).map( (answer, i)=> {
                    return (
                        <div className="answer" key={i}>
                          {answer}
                        </div>
                    )
                })}
            </div>
        );
  }
}
