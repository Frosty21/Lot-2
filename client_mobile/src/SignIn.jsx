import React, {Component} from 'react';
import NavigationBar from './NavigationBar.jsx';

export default class SignIn extends Component {

  render() {
    return (
      <section className="main">
        <form onSubmit={this.props.handleSignInSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.props.email}
              onChange={this.props.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.props.password}
              onChange={this.props.handleChange} />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}