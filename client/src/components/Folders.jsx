import React from 'react';

  const Folders = (props) => {

    return{
      {props.folders.map((folder) => {
        <div>
        {folder}
        </div>	
       
      })}
    };
   }


   export default Folders;