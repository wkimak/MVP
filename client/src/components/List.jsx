import React from 'react';

class List extends React.Component {

constructor(props){
	super(props);

	this.state = {
    visible: false,
	}
}

render(){
  return(
    <ul>
      {this.props.urls.map((url) => {
     	  return(
          <li> {url} </li>
        );
       })}
    </ul>
  );
 }
}


export default List;
