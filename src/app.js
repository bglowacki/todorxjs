import "todomvc-common/base.css"
import "todomvc-app-css/index.css"
import "todomvc-common/base.js"
import React from "react"
import ReactDOM from "react-dom"
import MainView from "./components/main"
import {Provider} from "react-redux"
import {createStore, combineReducers} from 'redux'
import todosReducer from "./reducers/todos"


(function (window) {
  'use strict';
  let state = combineReducers({
    todos: todosReducer
  });
  
  let store = createStore(state);
  
  ReactDOM.render(
    <Provider store={store}>
      <MainView/>
    </Provider>,
    document.getElementById("container")
  )
  
})(window);
