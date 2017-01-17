import $ from "jquery";

export default function newTodoForm() {
  return $(document.createElement("form"))
    .append(
      $(document.createElement("h2"))
      .text("Add a Todo")
    )
    .append(
      $(document.createElement("input"))
      .attr("id","new-todo-text")
      .attr("type","input")
      .attr("placeholder","Get milk")
    )
    .append(
      $(document.createElement("button"))
      .text("Add")
      .click((e) => {
        e.preventDefault();
        console.log("Adding a todo");
        const newTodo = {
          text: $("#new-todo-text").val()
        }
         $.ajax({
           url: "/todos",
           type: "POST",
           contentType: "application/json",
           data: JSON.stringify(newTodo)
         })
         .done((res) => {
           console.log(res);
         })
      })
    );
}
