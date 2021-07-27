import React, { Component } from "react";
import About from "./about";
import Contact from "./components/contact";
import Services from "./components/services";
import Home from "./components/home";
import Navbarr from "./components/navbar";
// import Router from "./router.components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ServiceDetails from "./components/ServiceDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbarr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/services/:id" component={ServiceDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
