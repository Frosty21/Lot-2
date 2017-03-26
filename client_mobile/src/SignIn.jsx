import React, {Component} from 'react';
import NavigationBar from './NavigationBar.jsx';


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
      <section className="main">
        <NavigationBar />
        <form>
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
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    )
  }
}