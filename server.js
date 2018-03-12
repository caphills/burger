// require dependencies
var express = require ("express");
var bodyParser = require("body-parser");

// to define port for the server to listen on
var PORT = process.env.PORT || 3000;

var app = express ();
// set up server for static file
app.use(express.static("public"));

// express app to be able to parse data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// handlebars and view engines
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening at localhost:" + PORT);
});
