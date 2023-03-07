import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

//contexts
import AppContextFC from "./context/AppContext";
import FormContextFC from "./context/FormContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <AppContextFC>
      <FormContextFC>
        <>
          <App />
        </>
      </FormContextFC>
    </AppContextFC>
  </Router>
);
