import React from 'react';
import List from './List.jsx';


/* -------- Level 2 --------- */
const Folders = (props) => {
  return (
    <div className='folders-container'>
      {props.folders.map(function(folder, i){
      	console.log('TITTTLE', folder.title);
        return(
          <div onClick={() => props.link !== '' ? props.onClick(folder.name, props.link, props.title) : null} className='folders' key={i}><b>{folder.name}</b><List link={props.link} urls={folder.urls} title={folder.title} /> </div>
        );
      })}
    </div>	
  );
};

export default Folders;