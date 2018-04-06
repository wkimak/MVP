import React from 'react';

/* --------- Level 2 ---------- */

const Content = function(props){
	return(
	  <div>	
        <div className='searchResults-container'>
           <h2> Title: {props.title}  </h2>
             <p> Content: {props.content} </p>
             <p> Url: {props.url} </p>
             <p> WordCount: {props.wordCount} </p>
        </div>
        <div className='projectPicker'>
         <select>
           <option value="project1">Project 1</option>
           <option value="project2">Project 2</option>
           <option value="project3">Project 3</option>
           <option value="project4">Project 4</option>
          </select> 
          <button type='button' onClick={() => props.onClick('project1')}> Send to Project </button>
         </div>
      </div>  
      );
     }


  export default Content;