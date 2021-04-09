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
//importamos las actions que usaremos

//storage app for all information
const store = createStore(
  reducers, //all reducers
  window.STATE_FROM_SERVER //initial state
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
