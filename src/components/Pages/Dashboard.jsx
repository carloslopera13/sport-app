import React from "react";
import { useSelector } from "react-redux";
import Header from "../commons/Header";

const Dashboard = () => {
  const { rol } = useSelector(state => state.ACCOUNT_REDUCER);

  return (
    <React.Fragment>
      <Header />
      <main>
        <p>{rol}</p>
      </main>
    </React.Fragment>
  );
};

export default Dashboard;
