import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render function");
    if (!this.props.todos) {
      return (<ul></ul>);
    }
      console.log("rendering");

    return (
    <div>
      <ul>
      {
        this.props.todos.map((todo) => (
          <TodoListItem key={todo.id} title={todo.title}/>
        ))
      }
      </ul>
      <br />
      <TodoForm createTodo={this.props.createTodo}/>
    </div>
  );}

  componentDidMount() {
    this.props.requestTodos();
  }
}

export default TodoList;
