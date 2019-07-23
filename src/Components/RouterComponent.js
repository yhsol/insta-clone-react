import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Feed from "./Router/Feed";
import Auth from "./Router/Auth";
import Profile from "./Router/Profile";
import Notification from "./Router/Notification";
import Explore from "./Router/Explore";
import Search from "./Router/Search";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/notification" component={Notification} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Redirect path="*" to="/" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect path="*" to="/" />
  </Switch>
);

const RouterComponent = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

RouterComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default RouterComponent;
