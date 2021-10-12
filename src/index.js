import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Users, SignUp, Tasks, Dashboard } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);