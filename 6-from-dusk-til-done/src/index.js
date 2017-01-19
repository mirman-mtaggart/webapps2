import $ from "jquery";
import todoListItem from "./todoListItem";
import newTodoForm from "./newTodoForm";
var todos;

function getTodos(callback) {
  return $.ajax(
    "/todos",
    {
      type: "GET"
    }
  )
  .done( (data) => {
    // This is bad and I should feel bad for writing it. Why?
    console.log("Success!");
    callback(data);
  })
  .fail( () => {
    console.error("Something bad happened");
  });
}


$(document).ready( () => {
  getTodos((data) => {
    todos = data;
    todos.forEach((todo) => {
      $("#root")
      .append(
        todoListItem(todo)
      );
    });
    $("#root").append(
      newTodoForm()
    );
  });
});
