import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const checkLogin = this.state;
    if (!this.props.checkLogin(checkLogin)) {
      alert("Invalid User");
    } else {
      alert("Log in Successful!");
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            value={this.state.email}
            onChange={e => this.change(e)}
            className="textBox"
            type="email"
            name="email"
            placeholder="email address"
          />
          <input
            value={this.state.password}
            onChange={e => this.change(e)}
            className="textBox"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <br />

          <button
            onClick={e => this.onSubmit(e)}
            className="submit"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
          <br />
          <Link style={{ color: "white", fontSize: "55%" }} to="/Register">
            Click Here to Register
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
