const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

function loadTodos(res) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
}

app.route("/todos")
.get((req, res) => {
  loadTodos(res);
})
.post((req, res) => {
  res.send("Creating a todo!");
});

app.route("/todos/:id")
.get((req, res) => {
  const id = req.params.id;
  res.send(`Here's todo #${id}`);
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
