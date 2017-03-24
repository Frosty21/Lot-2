import React, {Component} from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input type="text" className="form-control" name="username" placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name: </label>
          <input type="text" className="form-control" name="first_name" placeholder="Enter first name" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name: </label>
          <input type="text" className="form-control" name="last_name" placeholder="Enter last name" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password Confirmation: </label>
          <input type="password" className="form-control" name="password_confirmation" placeholder="Password Confirmation" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}