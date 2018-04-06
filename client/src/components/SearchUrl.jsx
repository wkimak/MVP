import React from 'react';

  class SearchUrl extends React.Component {
      
      constructor(props){
        super(props);
        
        this.state = {
          inputVal: ''
        }
    }

        render(){
          return(
            <form>
              <input placeholder='Search URL' className='searchInput' />
            </form>
          );
        }

     }

     export default SearchUrl;