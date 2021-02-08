import React from "react";
import "App.css";
import HeaderBlock from "components/header/headerBlock/headerBlock.js";
import Navbar from "components/header/navbar/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import News from "components/Pages/news/news.js";
import Policy from "components/Pages/policy/policy.js";
import Commentary from "components/Pages/commentary/commentary.js";
import Sports from "components/Pages/sports/sports.js";
import Reports from "components/Pages/reports/reports.js";
import Podcasts from "components/Pages/podcasts/podcasts.js";
import Games from "components/Pages/games/games.js";
import Footer from "components/footer/footer.js";

function App() {
  return (
    <>
      <Router>
        <HeaderBlock />
        <Navbar />
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/policy" component={Policy} />
          <Route path="/commentary" component={Commentary} />
          <Route path="/sports" component={Sports} />
          <Route path="/reports" component={Reports} />
          <Route path="/podcasts" component={Podcasts} />
          <Route path="/games" component={Games} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
