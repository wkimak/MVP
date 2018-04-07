import React from 'react';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

//var JsxParser = require('react-jsx-parser');


/* --------- Level 2 ---------- */

const Content = function(props){

 // transform html to JSX
 var htmlToReactParser = new HtmlToReactParser();
 var reactElement = htmlToReactParser.parse(props.content);
 var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

	return(
    <div className='searchResults-container'>
      <h2> {props.title} </h2>
         {reactHtml}
      <p> Url: {props.url} </p>
      <p> WordCount: {props.wordCount} </p>
    </div> 
  );
}

export default Content;