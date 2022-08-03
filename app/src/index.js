import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Router from "./router/Routes";

import "./index.css";
import MayinLayout from "./components/Layouts";
import { create } from "lodash";
import { configureStore } from "./store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <MayinLayout>
      <Router />
    </MayinLayout>
    </Provider>
  </BrowserRouter>
);
