import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import PricePage from "./PricePage";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/:price" component={PricePage} exact />
        <Route path="/contact" component={ContactPage} exact />


      </Switch>
    </Router>
  )
}

export default App;