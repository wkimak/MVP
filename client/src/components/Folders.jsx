import React from 'react';
import List from './List.jsx';


/* -------- Level 2 --------- */
const Folders = (props) => {
  return (
    <div className='folders-container'>
      {props.folders.map(function(folder, i){
      	console.log('FOLDER', folder);
        return(
          <div onClick={() => props.link !== '' ? props.onClick(folder.name, props.url) : null} className='folders' key={i}>
            <b>{folder.name}</b>
            <List urls={folder.urls} />
          </div>
        );
      })}
    </div>	
  );
};

export default Folders;