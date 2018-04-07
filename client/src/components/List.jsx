import React from 'react';



/* --------- Level 3 -------- */

const List = function(props) {
  return(
  <ol>
   {props.urls.map((url, i) => {
     	return(
       <div> 
        <a key={i} href={url} target='_blank'>  <li> {url} </li> </a>
        <button onClick={(event) => props.delete(url, props.name)}> Delete </button>
       </div> 
        
      );
    })}
  </ol>
  );
};
 
export default List;
