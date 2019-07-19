import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routing from "./Routing";
import { getContacts, addContacts, checkLogin } from "./contacts";
import Nav from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Routing
            getContacts={getContacts}
            addContacts={addContacts}
            checkLogin={checkLogin}
          />
        </Router>
      </div>
    );
  }
}

export default App;
