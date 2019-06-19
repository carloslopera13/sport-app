import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import Admin from "./Admin";
import Trainer from "./TrainersT";
import Sports from "./Sports";
import Trainers from "./Trainers";
import Profile from "./Profile";

import "./style.scss";
import ProfileTrainer from "./ProfileTrainer";
import ProfileSport from "./ProfileSport";

export const Routes = React.memo(() => {
  const { isAuthenticated, rol } = useSelector(state => state.ACCOUNT_REDUCER);

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/"
          exact
          rol={rol}
          authed={isAuthenticated}
          component={Home}
        />
        <PrivateRoute
          path="/admin"
          authed={isAuthenticated}
          component={Admin}
          exact
        />
        <PrivateRoute
          path="/trainer"
          authed={isAuthenticated}
          component={Trainer}
          exact
        />
        <PrivateRoute
          path="/admin/sports"
          component={Sports}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/trainer/sports"
          component={Sports}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/admin/trainers"
          component={Trainers}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/trainer/:id"
          component={ProfileTrainer}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/sport/:id"
          component={ProfileSport}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/admin/profile"
          component={Profile}
          authed={isAuthenticated}
        />
        <PrivateRoute
          path="/trainer/profile"
          component={Profile}
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

const PublicRoute = ({ component: Component, authed, rol, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? (
        <Component {...props} />
      ) : rol === "admin" ? (
        <Redirect to="/admin" />
      ) : (
        <Redirect to="/trainer" />
      )
    }
  />
);
