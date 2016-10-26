import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import _ from 'lodash';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      {let newState = _.merge({}, state);
      action.todos.forEach(todo => {newState[todo.id] = todo;});
      return newState;}
    case RECEIVE_TODO:
      {let newState = _.merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;}
    default:
      return state;
  }
};

export default TodosReducer;
