import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EntitySelection from "../pages/entitySelection/EntitySelection";
import LoginEmployee from "../pages/loginEmployee/LoginEmployee";

const AppRouts = () => {
  return (
    <Router>
      <Route path="/" exact component={<LoginEmployee />} />
      <Route path="/EntitySelection" component={<EntitySelection />} />
    </Router>
  );
};

export default AppRouts;
