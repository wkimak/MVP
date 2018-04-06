import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import SearchUrl from './components/SearchUrl.jsx';
import Folders from './components/Folders.jsx';
import Content from './components/Content.jsx';

import axios from 'axios';

/* ---------- Level 1 ----------- */

class App extends React.Component {
		  constructor(props){
		    super(props);
		    this.state = {
		      folders: [{name: 'project1', urls: []},
                    {name: 'project2', urls: []},
                    {name: 'project3', urls: []},
                    {name: 'project4', urls: []}],
          title: '',
          url: '',
          content: '',
          wordCount:''
		   }

		   this.searchUrl = this.searchUrl.bind(this);
       this.getInfo = this.getInfo.bind(this);
       this.addUrl = this.addUrl.bind(this);
		}



      /* -------- GET Request ----------- */
       getInfo(url){
         axios.get('http://localhost:3000/url', {params:{url: url}})
         .then((data) => {
          console.log('GET REQUEST RESPONSE', data.data);
          this.setState({
            title: data.data.title,
            url: data.data.url,
            content: data.data.content,
            wordCount: data.data.wordCount
          })
         })

         .catch((err) => {
            console.log('GET ERROR', err);
         })
       }

        /* ---------- POST Request ---------- */
        searchUrl(url){
          axios.post('http://localhost:3000/url', {url})
          .then((res) => {
            this.getInfo(url);
          	  console.log('POST from Client SUCCESS', res);
          })

          .catch((err) => {
          	console.log(err);
          })
        }

        /* -------- Push URL to specified folder -------- */
        addUrl(folder){

        for(var i = 0; i<this.state.folders.length; i++){
          if(this.state.folders[i].name === folder){
            this.state.folders[i].urls.push('hey');
          }
        }
      
          this.setState(this.state);
        }
		

		render(){
          return(
            <div>
            	<Navbar />
            	<SearchUrl search={this.searchUrl} />
            	<Folders folders={this.state.folders}/>
              <Content title={this.state.title} url={this.state.url} wordCount={this.state.wordCount} content={this.state.content} onClick={this.addUrl} />
            </div>	
          );
	   }

    }



ReactDOM.render(<App />, document.getElementById('app'));