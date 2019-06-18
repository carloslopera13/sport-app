import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./components/commons/Routes";
import createStore from "./state";
import "./App.scss";

const { persistor, store } = createStore();

const App = () => (
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </ReduxProvider>
);

export default App;
