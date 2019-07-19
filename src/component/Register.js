import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { confirmPassword, ...contact } = this.state;
    if (!this.props.addContacts(contact)) {
      alert("Invalid User");
    } else {
      alert("User Created!");
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <input
            value={this.state.firstName}
            onChange={e => this.change(e)}
            name="firstName"
            className="textBox"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            onChange={e => this.change(e)}
            className="textBox"
            name="lastName"
            placeholder="Last Name"
          />
          <br />
          <input
            value={this.state.email}
            onChange={e => this.change(e)}
            className="textBox"
            type="email"
            name="email"
            placeholder="email"
          />

          <input
            value={this.state.phoneNumber}
            onChange={e => this.change(e)}
            name="phoneNumber"
            className="textBox"
            placeholder="Phone Number"
            pattern="\d{10}"
          />

          <br />
          <input
            value={this.state.password}
            onChange={e => this.change(e)}
            name="password"
            className="textBox"
            type="password"
            placeholder="Password"
            minLength="8"
          />
          <input
            value={this.state.confirmPassword}
            onChange={e => this.change(e)}
            className="textBox"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            minLength="8"
          />
          <br />
          <span style={{ fontSize: "55%" }}>Minimum 8 characters</span>
          <br />

          <button
            onClick={e => this.onSubmit(e)}
            className="submit"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
          <Link style={{ color: "white", fontSize: "55%" }} to="/">
            Login
          </Link>
          <br />
        </form>
      </div>
    );
  }
}

export default Register;
