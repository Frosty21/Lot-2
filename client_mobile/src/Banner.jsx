import React, {Component} from 'react';
import Buttons from './Buttons.jsx';

export default class Banner extends Component {
  render() {
    return (
      <main className="main">
          <div className="jumbotron vertical-center">
            <div className="container text-center">
              <h1 className="head-text">Trivia101</h1>
            </div>
          </div>
      </main>
    )
  }
}