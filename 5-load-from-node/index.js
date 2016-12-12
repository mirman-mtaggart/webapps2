const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 3000;

const app = express();

app.use(bodyParser.json());

function loadTodos(callback) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
}

app.route("/todos")
.get((req, res) => {
  loadTodos((json) =>{
    res.json(json.data);
  });
})
.post((req, res) => {
  loadTodos((json) => {
    const todos = json.data;
    json.lastId++;
    let newTodo = req.body;
    newTodo.completed = false;
    newTodo.id = json.lastId;
    todos.push(newTodo);
    json.data = todos;
    return fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  })
});

app.route("/todos/:id")
.get((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for (const todo of todos) {
      if (todo.id === id) {
        return res.json(todo);
      }
    }
    return res.send("No todo found");
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
