import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar.jsx';
import SearchUrl from './components/SearchUrl.jsx';



class App extends React.Component {

		  constructor(props){
		    super(props);
		    this.state = {
		      folders: []
		   }
		   this.addFolder = this.addFolder.bind(this);
		}

		addFolder(){
          this.state.folders.push('Project');
          this.setState(this.state);
      }

		render(){
          return(
            <div>
            	<Navbar onClick={this.addFolder} />
            	<SearchUrl />
            </div>	

          );
	   }

    }



ReactDOM.render(<App />, document.getElementById('app'));