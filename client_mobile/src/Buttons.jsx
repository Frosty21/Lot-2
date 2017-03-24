import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Buttons extends Component {

  render() {
    return (
      <div className="child">
        <Router>
        <div className="lead">
          <Link className="btn btn-lg btn-success center-block" role="button" to="/sign_up" onClick={this.props.handleClickSignUp}>Sign Up</Link>
          <Link className="btn btn-lg btn-success center-block" role="button" to="/login" onClick={this.props.handleClickSignIn}>Login</Link>
        </div>
        </Router>
      </div>
    )
  }
}