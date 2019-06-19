import React from "react";
import { useSelector } from "react-redux";
import { Routes } from "./components/commons/Routes";
import "./App.scss";

const App = () => {
  const { isAuthenticated, rol } = useSelector(state => state.ACCOUNT_REDUCER);
  return <Routes />;
};

export default App;
