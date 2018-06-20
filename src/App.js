import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Main from "./Main";
import { Helmet } from "react-helmet";
const history = createBrowserHistory;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="EveryInteract (@EveryInteract) | Twitter" />
        <BrowserRouter history={history}>
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
