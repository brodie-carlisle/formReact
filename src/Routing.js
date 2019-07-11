import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Router>
  );
}
export default Routing;
