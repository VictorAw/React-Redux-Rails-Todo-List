import { connect } from "react-redux";
import { requestTodos, createTodo } from "../../actions/todo_actions";
import { allTodos } from "../../reducers/selector";
import TodoList from "./todo_list";

function mapStateToProps(state) {
  return {todos: allTodos(state)};
}

function mapDispatchToProps(dispatch) {
  return {
    requestTodos: () => dispatch(requestTodos()),
    createTodo: (todo) => dispatch(createTodo(todo))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
