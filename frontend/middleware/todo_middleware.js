import { REQUEST_TODOS, CREATE_TODO } from "../actions/todo_actions";
import { fetchTodos, postTodo } from "../util/todo_api_util";
import { printSuccess, printError } from "../util/todo_api_util";
import { receiveTodos, receiveTodo } from "../actions/todo_actions";

const TodoMiddleware = store => next => action => {
  switch(action.type) {
    case REQUEST_TODOS:
      fetchTodos((data) => {
        store.dispatch(receiveTodos(data));
      }, printError);
      return next(action);
    case CREATE_TODO:
      console.log("Create TODO");
      console.log(action);
      postTodo(action.todo ,(data) => {
        store.dispatch(receiveTodo(data));
      }, printError);
      return next(action);
    default:
      return next(action);
  }
};

export default TodoMiddleware;
