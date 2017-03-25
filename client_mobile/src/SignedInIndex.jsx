import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class SignedInIndex extends Component {
  render() {
    return (
      <div className="links">
        <div className="create-game">
          <Link className="btn btn-lg btn-success center-block" to="create_game" role="button">Create Game</Link>
        </div>
        <div className="join-game">
          <Link className="btn btn-lg btn-success center-block" to="join_game" role="button">Join Game</Link>
        </div>
        <div className="leaderboard-link">
          <Link className="btn btn-lg btn-success center-block" to="leaderboard" role="button">Leaderboard</Link>
        </div>
        <div className="settings-link">
          <Link className="btn btn-lg btn-success center-block" to="settings" role="button">Settings</Link>
        </div>
      </div>
    )
  }
}