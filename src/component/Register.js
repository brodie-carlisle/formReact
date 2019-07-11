import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <div>
            <input type="email" name="email" placeholder="email" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="\d{10}"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              minlength="8"
              required
            />
            <input
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              minlength="8"
              required
            />
            <br />
            <span style={{ fontSize: "55%" }}>Minimum 8 characters</span>
            <br />

            <input type="submit" value="Submit" />
          </div>
        </form>
        <div>
          <Link style={{ color: "white", fontSize: "55%" }} to="/">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
