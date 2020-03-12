import ReactDOM from "react-dom" // 1
import React from "react" // 1
import { Provider } from "react-redux" // 2
import store from './store.js' // 2
import App from './App.jsx' // 1
import "./main.css" // 1

ReactDOM.render( // 3
  <Provider store={store}> {/* 3 */}
    <App /> {/* 3 */}
  </Provider>, // 3
  document.getElementById("root") // 3
) // 3
