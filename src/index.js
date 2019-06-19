import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./state";
import "./index.scss";
import App from "./App.jsx";

const { persistor, store } = createStore();

const AppConnected = () => (
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
);

ReactDOM.render(<AppConnected />, document.getElementById("root"));
