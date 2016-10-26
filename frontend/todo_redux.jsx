import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { requestTodos, createTodo } from "./actions/todo_actions";
import { allTodos } from './reducers/selector';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  ReactDOM.render(<Root store={store} />, document.getElementById("content"));
  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
  window.createTodo = createTodo;
});
