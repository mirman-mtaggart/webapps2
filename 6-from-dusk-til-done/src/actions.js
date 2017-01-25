import reducer from "./reducer";

export function addTodo(state, newTodo) {
  return reducer(state, {
    type: "ADD_TODO",
    newTodo
  })
}

export function getTodos(state) {
  return reducer(state, {
    type: "RETRIEVE_TODOS"
  });
}
