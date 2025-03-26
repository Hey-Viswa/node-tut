let express = require('express');
let app = express();

// Serve static files from the public directory
app.use('/public', express.static(__dirname + '/public'));

// global variable
let absolutePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
});

module.exports = app;