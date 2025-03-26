let express = require('express');
let app = express();

// Log message to console
console.log("Hello World");

// Add a root route handler
app.get("/", function(req, res) {
  res.send("Hello Express");
});

module.exports = app;