import React, {Component} from 'react';


export default class NavigationBar extends Component {
  render() {
    if (this.props.isLoggedIn === false) {
    return (
      <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button id="btnCollapse" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Legends of Trivia</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li onClick={this.props.handleClickSignUp}><a className="a" href="#">Register</a></li>
                        <li onClick={this.props.handleClickSignIn}><a className="a" href="#">Login</a></li>
                    </ul>
                </div>
            </div>
      </nav>
    )}
    else {
    return (
      <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button id="btnCollapse" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">Legends of Trivia</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                      <p className="navbar-text">Signed in as {this.props.getUsername}</p>
                      <li className="nav-item" onClick={this.props.handleClickLoggedOut}>
                        <a className="nav-link" href="/">Logout</a>
                      </li>
                    </ul>
                </div>
            </div>
      </nav>
    )}
  }
}