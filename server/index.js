const express = require('express');
let app = express();

// BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// key
var config = require('../config');
// request module
var request = require('request');
//mercury parser 
const mercury = require('mercury-parser')(config.key);
// DB
var db = require('../db/index');


app.use(express.static(__dirname + '/../client/dist'));

/* ------------- POST Request response ------------ */
app.post('/url', function(req, res){

  mercury.parse(req.body.url).then(response => {
    db.Url.findOne({url:response.url}, function(error, url){
        if(!url){
         db.newUrl(response.title, response.content, response.url, response.word_count);
        }
      }) 
  }).catch(err => {
    console.log('Error: ', err);
})

  res.status(201).send();
});



/* ------------- GET Request response ---------- */
app.get('/url', function(req, res){
  db.Url.find({url: req.query.url}, function(error, url){
     res.status(200).send(url[0]);
  });
});



/* ----------- POST Request response ----------- */
app.post('/folder', function(req, res){
  db.newFolder(req.body.link, req.body.title, req.body.folder);
  res.status(201).send();
});

/* ------- GET Request response ------- */
app.get('/folder', function(req, res){
  db.Folder.find({}, function(error, folder){
    res.status(200).send(folder);
  });
});


let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
