import $ from "jquery";
import {deleteTodo} from "./actions";
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
        .attr("checked", todo.completed)
    )
    .append(
      $(document.createElement("button"))
      .attr("type","button")
      .text("Delete")
      .click(() =>{
        deleteTodo([],todo.id);
      })
    )
    .addClass("todo");
}
