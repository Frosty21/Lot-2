import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

export default class Banner extends Component {
  render() {
    return (
      <main className="child">
          <div className="jumbotron vertical-center">
            <div className="container text-center">
              <h1 className="head-text">Trivia101</h1>
              <p> Sign up below </p>
            </div>
          </div>
      </main>
    )
  }
}