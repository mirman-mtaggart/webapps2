import $ from "jquery";
import todoListItem from "./todoListItem";
import newTodoForm from "./newTodoForm";
import {getTodos} from "./actions";
var todos;

function updateTodos(todos) {
  $("#root").empty();
  todos.forEach((todo) => {
    $("#root")
    .append(
      todoListItem(todo)
    );
  });
  $("#root").append(
    newTodoForm()
  );
}


$(document).ready( () => {
  getTodos((data) => {
  updateTodos();

  });
});
