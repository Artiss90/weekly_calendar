import React from "react";
import ReactDOM from "react-dom";
// import store from "redux/store";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "modern-normalize/modern-normalize.css";
import "./index.css";
import "styleHelpers/styleHelpers.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store.store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
