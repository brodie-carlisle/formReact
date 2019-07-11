import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" name="uName" placeholder="Username" />
          <input type="text" name="pword" placeholder="Password" />
          <br />

          <input type="submit" value="Submit" />
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
