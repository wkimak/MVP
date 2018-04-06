import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import SearchUrl from './components/SearchUrl.jsx';
import Folders from './components/Folders.jsx';

import axios from 'axios';



class App extends React.Component {
		  constructor(props){
		    super(props);
		    this.state = {
		      folders: ['project1', 'project2', 'project3', 'project4']
		   }
		   this.searchUrl = this.searchUrl.bind(this);
		}

        searchUrl(url){
          axios.post('http://localhost:3000/url', {url})
          .then((res) => {
          	console.log('POST from Client SUCCESS', res);
          })

          .catch((err) => {
          	console.log(err);
          })
        }
		

		render(){
          return(
            <div>
            	<Navbar />
            	<SearchUrl search={this.searchUrl}/>
            	<Folders folders={this.state.folders}/>
            </div>	
          );
	   }

    }



ReactDOM.render(<App />, document.getElementById('app'));