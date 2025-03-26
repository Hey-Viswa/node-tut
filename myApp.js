let express = require('express');
let app = express();

// Serve static files from the public directory
app.use('/public', express.static(__dirname + '/public'));


app.get("/json", function(req, res) {
    res.json({
        "message": "Hello json"
    });
});

// Add this line to start the server

module.exports = app;