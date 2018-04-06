import React from 'react';

  const Folders = (props) => {
    return (

        <div>
           {props.folders.map(function(folder){
            return(
              <div className='folders'>{folder}</div>
              );
           })}
        </div>	
    );
   };


   export default Folders;