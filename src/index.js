import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/Routes";
import reportWebVitals from "./reportWebVitals";
//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
//import reducers
import reducers from "./reducers/Reducers";

//storage app for all information
const store = createStore(
  reducers, //all reducers
  {} //initial state
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
