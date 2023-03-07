import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import SpreedlyShell from "./spreedly/SpreedlyShell";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={SpreedlyShell} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
