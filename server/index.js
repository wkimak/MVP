const express = require('express');
let app = express();

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// request module
 var request = require('request');

 // key
 var config = require('../config');


app.use(express.static(__dirname + '/../client/dist'));



/* ------------- POST Request response ------------ */

app.post('/url', function(req, res){

	const options = {  
    url: `https://mercury.postlight.com/parser?url=${req.body.url}`,
    json: true,
    method: 'GET',
     headers: {
        'x-api-key': config.key
    }
  };

	request(options, function(err, response, body){
      if(err){
      	console.log('API ERROR', err);
       } else{
         console.log('API RESPONSE', body);
      }
	});

console.log('REQ BODYYYY', req.body);

res.status(201).send();
});






let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
