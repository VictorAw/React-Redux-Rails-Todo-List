export const allTodos = (state) => {
  // All todo keys from state
  let todoKeys = Object.keys(state.todos);

  return todoKeys.map((key) => (
    state.todos[key]
  ));
};
