export default function reducer(state, action) {
  switch(action.type) {
    case "RETRIEVE_TODOS":
      return $.ajax(
        "/todos",
        {
          type: "GET"
        }
      )
      .done( (data) => {
        console.log("Success!");
        return data;
      })
      .fail( () => {
        console.error("Something bad happened");
      });
      return state;
    case "DELETE_TODO":
      return $.ajax({
        type: "DELETE",
        url: `/todos/${action.id}`,
        contentType: "application/json"
      })
      .done((res) => {
        return res;
      });
    case "ADD_TODO":
      return $.ajax({
        url: "/todos",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(action.newTodo)
      })
      .done((res) => {
        return res;
      })
    default:
      return state;
  }
}
