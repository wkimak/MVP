import React from 'react';
import List from './List.jsx';


/* -------- Level 2 --------- */

  const Folders = (props) => {
    return (
        <div>
           {props.folders.map(function(folder){
            return(
             
              <div className='folders'>{folder.name} <List urls={folder.urls}/> </div>
          
              );
           })}
        </div>	
    );
   };


   export default Folders;