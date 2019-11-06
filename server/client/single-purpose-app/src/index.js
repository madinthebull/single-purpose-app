import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./redux/reducers/reducers";

// create redux store
const storeWithMiddleware = applyMiddleware(promise)(createStore)
const app = (
  <Provider
    store={storeWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
