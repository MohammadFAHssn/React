import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App"; // react component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // It better be here.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
