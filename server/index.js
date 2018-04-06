const express = require('express');
let app = express();

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));



let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
