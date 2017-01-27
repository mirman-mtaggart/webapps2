import $ from "jquery";
import {deleteTodo,editTodo} from "./actions";
export default function todoListItem(todo) {
  return $(document.createElement("div"))
    .append(
      $(document.createElement("h3")).text(
        `${todo.date}: ${todo.text}`
      )
    )
    .append(
      $(document.createElement("input"))
        .attr("type","checkbox")
        .attr("id",`todo-${todo.id}-completed`)
        .attr("checked", todo.completed)
        .click((e) => {
          const editedTodo = {
            id: todo.id,
            text: todo.text,
            date: todo.date,
            completed: e.target.checked
          }
          editTodo([],todo.id,editedTodo);
        })
    )
    .append(
      $(document.createElement("button"))
      .attr("type","button")
      .text("Delete")
      .click(() =>{
        deleteTodo([],todo.id);
      })
    )
    .attr("id",`todo-${todo.id}`)
    .addClass("todo");
}
