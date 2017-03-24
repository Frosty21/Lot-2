import React, {Component} from 'react';

export default class SignIn extends Component {
  render() {
    return (
      <section className="main">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" className="form-control" name="username" placeholder="Enter Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" className="form-control" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    )
  }
}