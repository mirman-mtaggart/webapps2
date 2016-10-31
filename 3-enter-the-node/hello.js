var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi from Taggart!");
});

app.listen(3000);
