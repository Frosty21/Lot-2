import React, {Component} from 'react';
import NavigationBar from './NavigationBar.jsx';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
      <NavigationBar />
      <form onSubmit={this.onSubmit}>
        <h1>Sign up today!</h1>

        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="Enter first name"
            value={this.state.first_name}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Enter last name"
            value={this.state.last_name}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password Confirmation: </label>
          <input
            type="password"
            className="form-control"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.onChange} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      </div>
    )
  }
}