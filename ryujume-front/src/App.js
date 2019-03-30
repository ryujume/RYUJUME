import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Join, Login, Main } from "./container/index";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
