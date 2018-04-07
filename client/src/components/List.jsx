import React from 'react';



/* --------- Level 3 -------- */

const List = function(props) {
  console.log('linnkkk', props);

  return(
  <ol>
   {props.urls.map((url, i) => {
     	return(
        <a key={i} href={url} target='_blank'> <li> {url} </li> </a>
      );
    })}
  </ol>
  );
};
 
export default List;
