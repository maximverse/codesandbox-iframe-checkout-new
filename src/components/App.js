import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Main from "./main/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
