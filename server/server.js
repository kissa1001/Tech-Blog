var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var blogController = require("./controllers/blogController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json())
app.use("/api", blogController);

app.listen(8080,function(){
    console.log("Started listening on port", 8080);
});

app.get('/.coll', function (req, res) {
  res.send('Blog content goes here');
});

// Connect to mongodb database
mongoose.connect("mongodb://localhost/blogfinder");