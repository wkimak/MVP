import React from 'react';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

//var JsxParser = require('react-jsx-parser');


/* --------- Level 2 ---------- */

const Content = function(props){
  return(
    <div className='searchResults-container'>
      <h2> {props.title} </h2>
      <p> WordCount: {props.wordCount} </p>
      <div dangerouslySetInnerHTML={{__html: props.content}} /> 
      <p> Url: {props.url} </p>
    </div> 
  );
}

export default Content;