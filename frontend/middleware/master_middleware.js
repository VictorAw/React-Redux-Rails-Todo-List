import { applyMiddleware } from 'redux';
import todoMiddleware from "./todo_middleware";

const masterMiddleware = applyMiddleware(todoMiddleware);

export default masterMiddleware;
