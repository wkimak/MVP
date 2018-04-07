import React from 'react';
import List from './List.jsx';


/* -------- Level 2 --------- */
const Folders = (props) => {
  return (
    <div className='folders-container'>
      {props.folders.map(function(folder){
        return(
          <div onClick={() => props.link !== '' ? props.onClick(folder.name) : null} className='folders'>{folder.name} <List link={props.link} urls={folder.urls}/> </div>
        );
      })}
    </div>	
  );
};

export default Folders;