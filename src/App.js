import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Main from "./Main";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="EveryInteract (@EveryInteract) | Twitter" />
        <BrowserRouter>
          <Switch>
            <Route path="/EveryInteract" component={Main} />
            <Redirect from="/" to="/EveryInteract" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
