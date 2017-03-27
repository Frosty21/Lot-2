import React, {Component} from 'react';


export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Legends of Trivia</a>
          </div>

          <div className="collapse navbar-collapse">
            <div className="nav navbar-nav navbar-right">
              <li className="nav-item" onClick={this.props.handleClickSignUp}>Register</li>
              <li className="nav-item" onClick={this.props.handleClickSignIn}>Login</li>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}