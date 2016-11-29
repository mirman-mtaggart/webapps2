const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();


function loadTodos(callback) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
}

function saveTodos(data, callback) {
  return fs.writeFile("./todos.json",JSON.stringify(data), (err) => {
    callback(err);
  });
}

app.route("/todos")
.get((req, res) => {
  loadTodos((data) => {
    res.status(200).json(data);
  });
})
.post((req, res) => {
  res.send("Creating a todo!");
});

app.route("/todos/:id")
.get((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((data) => {
    for (const d in data.todos) {
      const todo = data.todos[d];
      if (todo.id === id) {
        return res.status(200).json(todo);
      }
    }
    return res.status(404).send("No such id found");
  });
})
.put((req, res) => {
  const id = req.params.id;
  res.send(`Updating todo #${id}`);
})
.delete((req, res) => {
  const id = req.params.id;
  res.send(`Deleting todo #${id}`);
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
