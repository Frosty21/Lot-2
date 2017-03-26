import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Gamelobby extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card" style={{width: '20rem'}}>
              <img className="card-img-top" src="http://www.fillmurray.com/318/180" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Trivia</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Join Game</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{width: '20rem'}}>
              <img className="card-img-top" src="http://www.fillmurray.com/318/180" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Movies</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Join Game</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{width: '20rem'}}>
              <img className="card-img-top" src="http://www.fillmurray.com/318/180" alt="Card image cap" />
              <div className="card-block">
                <h4 className="card-title">Guess this person</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Join Game</a>
              </div>
            </div>
          </div>
        </div>
        <div className="back-button">
          <button type="button" className="btn btn-link">Back to Menu</button>
        </div>
      </div>
    )
  }
}