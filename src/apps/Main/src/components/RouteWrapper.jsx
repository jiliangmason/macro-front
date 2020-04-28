import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
const { Home } = require("../pages/Home");
const { Login } = require("../pages/Login");

const RouteWrapper = (props) => {
  const jsessionId = sessionStorage.getItem("jsessionid");
  let app = null;
  if (!jsessionId) {
    app = Login;
  } else {
    app = Home;
  }
  return (
    <Router>
      <Route component={app} />
    </Router>
  );
};

export default RouteWrapper;
