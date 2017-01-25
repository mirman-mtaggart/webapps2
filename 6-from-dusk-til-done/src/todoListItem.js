import $ from "jquery";
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
      .click((e) =>{
        console.log(e);
        // Action goes here
      })
    )
    .addClass("todo");
}
