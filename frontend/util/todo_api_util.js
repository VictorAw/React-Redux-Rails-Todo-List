export const fetchTodos = (success, error) => {
  $.ajax({
    method: "GET",
    url: "api/todos",
    success,
    error
  });
};

export const postTodo = (todo, success, error) => {
  $.ajax({
    method: "POST",
    url: "api/todos",
    data: todo,
    success,
    error
  });
};

export const printSuccess = (data) => {
  console.log("You did it.");
  console.log(data);
};

export const printError = (error) => {
  console.log("You didn't do it.");
  console.log(error);
};
