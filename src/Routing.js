import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Users from "./component/Users";
import Forgot from "./component/Forgot";

const Routing = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Login checkLogin={props.checkLogin} />}
      />
      <Route
        path="/Register"
        component={() => <Register addContacts={props.addContacts} />}
      />
      <Route
        path="/Users"
        component={() => <Users getContacts={props.getContacts} />}
      />
      <Route
        path="/Forgot"
        component={Forgot} />
    </Switch>
  );
};

export default Routing;
