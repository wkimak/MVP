import React from 'react';
import List from './List.jsx';


/* -------- Level 2 --------- */
const Folders = (props) => {
  return (
    <div className='folders-container'>
      {props.folders.map(function(folder, i){
        return(
          <div className='folders'>
            <b onClick={() => props.link !== '' ? props.onClick(folder.name, props.url) : null} key={i}>{folder.name}</b>
            <List urls={folder.urls} name={folder.name} delete={props.delete} />
          </div>
        );
      })}
    </div>	
  );
};

export default Folders;