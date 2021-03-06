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
		    folders: [
          {name: 'project1', urls: []},
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
       this.deleteUrl = this.deleteUrl.bind(this);
		}



 /* -------- GET Request ----------- */
    getInfo(url){
      axios.get('http://localhost:3000/url', {params:{url: url}})
      .then((data) => {
        this.setState({
          title: data.data.title,
          url: data.data.url,
          content: data.data.content,
          wordCount: data.data.wordCount
        })
      })

      .catch((err) => {
        console.log(err);
      });
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
    addUrl(folder, url){
      for(var i = 0; i<this.state.folders.length; i++){
        if(this.state.folders[i].name === folder){
          if(!this.state.folders[i].urls.includes(this.state.title)){
          this.state.folders[i].urls.push(this.state.title);
         }
        }
      }

      this.setState(this.state);

      axios.post('http://localhost:3000/folder', {folder, url})
      .then((res) => {
          console.log('POST to /folder SUCCESSFUL', res);
        })

      .catch((err) => {
        console.log(err);
      })
    }


    /* ------------ Delete URL ---------- */
    deleteUrl(url, folder){
      for(var i = 0; i < this.state.folders.length; i++){
        var copy = this.state.folders[i];
        if(this.state.folders[i].name === folder){
          this.state.folders[i].urls.splice(copy.urls.indexOf(url));
        }
      }  

      this.setState(this.state);
    
      axios.post('http://localhost:3000/delete', {url, folder})
      .then((res) => {
          console.log('POST to /delete SUCCESSFUL', res);
        })

      .catch((err) => {
        console.log(err);
      })
    }



    /* ---------- retieve all links/corresponding folders on page render ------- */
    componentDidMount(){
      axios.get('http://localhost:3000/folder')
      .then((res) => {
        for(var i = 0; i < res.data.length; i++){
           for(var x = 0; x < this.state.folders.length; x++){
             if(res.data[i].folder === this.state.folders[x].name){
               console.log('snfjknfksdnf', res);
              this.state.folders[x].urls.push(res.data[i].url);
             }
           }
        }
        this.setState(this.state);
      })
    }
		

		render(){
      return(
        <div>
          <Navbar />
          <Folders folders={this.state.folders} onClick={this.addUrl} url={this.state.url} delete={this.deleteUrl} />
          <SearchUrl search={this.searchUrl} />
          <Content title={this.state.title} url={this.state.url} wordCount={this.state.wordCount} content={this.state.content} />
        </div>	
      );
	  }
  }



ReactDOM.render(<App />, document.getElementById('app'));