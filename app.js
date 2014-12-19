var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
app.use('/components', express.static(__dirname + "/components"));

app.listen(4500, function() {
    console.log('listerning on port', 4500);
});