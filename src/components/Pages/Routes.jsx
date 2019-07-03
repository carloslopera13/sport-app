import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import SingleTrainer from "./SingleTrainer";
import SingleSport from "./SingleSport";

import "../commons/style.scss";
import Sports from "./Sports";
import Trainers from "./Trainers";

export const Routes = React.memo(() => {
  const { isAuthenticated } = useSelector(state => state.ACCOUNT_REDUCER);

  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact authed={isAuthenticated} component={Home} />

        <PrivateRoute
          path="/dashboard"
          exact
          authed={isAuthenticated}
          component={Dashboard}
        />

        <PrivateRoute
          path="/profile"
          authed={isAuthenticated}
          component={Profile}
          exact
        />

        <PrivateRoute
          path="/sports"
          authed={isAuthenticated}
          component={Sports}
          exact
        />

        <PrivateRoute
          path="/trainers"
          authed={isAuthenticated}
          component={Trainers}
          exact
        />

        <PrivateRoute
          path="/trainer/:id"
          component={SingleTrainer}
          authed={isAuthenticated}
        />

        <PrivateRoute
          path="/sport/:id"
          component={SingleSport}
          authed={isAuthenticated}
        />

        <Route render={() => <div>404 pagina no existe</div>} />
      </Switch>
    </Router>
  );
});

// Private and Public routes utils
const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);
