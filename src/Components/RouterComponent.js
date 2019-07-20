import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Feed from "./Router/Feed";
import Auth from "./Router/Auth";
import Profile from "./Router/Profile";
import Notification from "./Router/Notification";
import Explore from "./Router/Explore";
import SearchContainer from "./Router/Search/SearchContainer";

const LoggedInRoutes = () => (
  <Switch>
    {/* <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route paht="/notification" component={Notification} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} /> */}
    <Route exact path="/">
      <Feed />
    </Route>
    <Route path="/explore">
      <Explore />
    </Route>
    <Route path="/notification">
      <Notification />
    </Route>
    <Route path="/search">
      <SearchContainer />
    </Route>
    <Route path="/:username">
      <Profile />
    </Route>
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Auth />
    </Route>
  </Switch>
);

const RouterComponent = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

RouterComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default RouterComponent;
