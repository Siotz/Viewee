import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import rootReducer from "./store/ducks";
import { Provider } from "react-redux";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
