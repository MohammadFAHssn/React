import ReactDOM from "react-dom/client";
import React from "react";

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // It better be here.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
