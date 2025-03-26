let express = require('express');
let app = express();

// global variable
let absolutePath = __dirname + "/views/index.html";

// Log message to console
console.log("Hello World");

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
});