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


let folderSchema = mongoose.Schema({
  folder: String,
  url: String
});


let Url = mongoose.model('Url', urlSchema);
let Folder = mongoose.model('Folder', folderSchema);

// function to create new repo instance and save to MongoDB


let newUrl = function(title, content, url, wordCount){
  new Url({
    title: title,
    content: content,
    url: url,
    wordCount: wordCount
  }).save()
 }

let newFolder = function(url, folder){
  new Folder({
    url: url,
    folder: folder
  }).save()
 }


module.exports.newUrl = newUrl;
module.exports.Url = Url;
module.exports.newFolder = newFolder;
module.exports.Folder = Folder;

