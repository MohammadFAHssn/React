import ReactDOM from "react-dom/client";
import React from "react";

import "./style.css";

import App from "./component/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // It better be here.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
