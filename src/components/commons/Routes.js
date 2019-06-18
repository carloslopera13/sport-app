import React from "react";
import "./style.css"
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
import { useSelector } from "react-redux";
import Trainers from "./Trainers";
import Profile from "./Profile";

export const Routes = () => {
  const isAuthenticated = useSelector(
    state => state.ACCOUNT_REDUCER.isAuthenticated
  );
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact authed={isAuthenticated} component={Home} />
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
};

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
      authed === false ? <Component {...props} /> : <Redirect to="/trainer" />
    }
  />
);
