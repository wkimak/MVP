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
 // DB
 var db = require('../db/index');

 //Convert HTML to JSX
//  var HTMLtoJSX = require('htmltojsx');

//  var converter = new HTMLtoJSX({
//   indent: '\t',
//   hideComment: true,
//   createClass: true,
//   outputClassName: 'AwesomeComponent'
// });
//var output = converter.convert('<div>Hello world!</div>');


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
          console.log('DATA SAVED IN MONGODB', body);
          db.newUrl(body.title, body.content, body.url, body.word_count);
      }
	});

  res.status(201).send();
});



/* ------------- GET Request response ---------- */
app.get('/url', function(req, res){
  console.log('QUUUERRRYYY', req);

  db.Url.find({url: req.query.url}, function(error, url){
     res.status(200).send(url[0]);
  });
  
});






let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
