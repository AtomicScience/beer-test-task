import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";
import { FavoriteStore } from "./stores/FavoriteStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ FavoriteStore }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);