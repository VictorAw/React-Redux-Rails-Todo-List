import {createStore} from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from "../middleware/master_middleware";

const preloadedState = {
  todos: {}
};

const configureStore = (state = preloadedState) => (
  createStore(RootReducer, state, masterMiddleware)
);

export default configureStore;
