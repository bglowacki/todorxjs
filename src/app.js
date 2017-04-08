import "todomvc-common/base.css"
import "todomvc-app-css/index.css"
import "todomvc-common/base.js"
import React from "react"
import ReactDOM from "react-dom"
import MainView from "./components/main"

(function (window) {
  'use strict';
  
  ReactDOM.render(
    <MainView/>,
    document.getElementById("container")
  )
  
})(window);
