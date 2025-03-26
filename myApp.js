let express = require('express');
let app = express();

// Log message to console
console.log("Hello World");

app.get("/", (req, res) => {
    res.send("Hello World")
});