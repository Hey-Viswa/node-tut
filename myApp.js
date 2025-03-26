let express = require('express');
let app = express();

// global variable
let absolutePath = __dirname + "/views/index.html";



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });