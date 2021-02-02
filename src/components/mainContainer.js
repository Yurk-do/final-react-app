import React from "react";
import HeaderBlock from "components/header/headerBlock/headerBlock.js";
import Navbar from "components/header/navbar/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "components/Pages/home/home.js";
import News from "components/Pages/news/news.js";
import Policy from "components/Pages/policy/policy.js";

const MainContainer = (props) => (
  <>
    <Router>
      <HeaderBlock />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reports" component={News} />
        <Route path="/products" component={Policy} />
      </Switch>
    </Router>
  </>
);
export default MainContainer;
