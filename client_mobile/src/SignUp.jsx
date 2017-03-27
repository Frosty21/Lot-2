import React, {Component} from 'react';
import NavigationBar from './NavigationBar.jsx';

export default class SignUp extends Component {

  render() {
    return (
      <section className="main">
      <form onSubmit={this.props.handleSubmit}>
        <h1>Sign up today!</h1>

        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter Username"
            value={this.props.username}
            onChange={this.props.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter Email"
            value={this.props.email}
            onChange={this.props.handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            placeholder="Enter first name"
            value={this.props.first_name}
            onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            className="form-control"
            name="last_name"
            placeholder="Enter last name"
            value={this.props.last_name}
            onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password Confirmation: </label>
          <input
            type="password"
            className="form-control"
            name="password_confirmation"
            placeholder="Password Confirmation"
            value={this.props.password_confirmation}
            onChange={this.props.handleChange}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      </section>
    )
  }
}