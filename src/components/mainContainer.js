import React from "react";
import HeaderBlock from "./homepage/header/headerBlock/headerBlock.js";
import Navbar from "./homepage/header/navbar/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./homepage/header/navbar/home.js";
import Products from "./homepage/header/navbar/products.js";
import Reports from "./homepage/header/navbar/reports.js";

const MainContainer = (props) => (
  <>
    <Router>
      <HeaderBlock />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  </>
);
export default MainContainer;
