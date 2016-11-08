const express = require("express");
const port = 3000;

const app = express();

app.route("/todos")
.get((req, res) => {
  res.send("All of the todos");
})
.post((req, res) => {
  res.send("Creating a todo!");
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
