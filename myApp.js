let express = require('express');
let app = express();

// global variable
absolutePath = _dirname + "/views/index.html";

// Log message to console
console.log("Hello World");

app.get(absolutePath, (req, res) => {
    res.sendfile(absolutePath);
});