import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "./Router/Auth";
import Feed from "./Router/Feed";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const RouterComponent = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </Router>
  );
};

RouterComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default RouterComponent;
