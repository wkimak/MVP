const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetch');

mongoose.connection.on("error", (error) => {console.log(error)});
mongoose.connection.on("connected", () => {console.log('CONNECTED')});


let urlSchema = mongoose.Schema({
  title: String,
  content: String,
  url: String,
  wordCount: Number
});

let Url = mongoose.model('Url', urlSchema);

// function to create new repo instance and save to MongoDB
let newUrl = function(title, content, url, wordCount){
  new Url({
    title: title,
    content: content,
    url: url,
    wordCount: wordCount
  }).save()
 }


module.exports.newUrl = newUrl;
module.exports.Url = Url;

