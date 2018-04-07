import React from 'react';



/* --------- Level 3 -------- */

class List extends React.Component {

constructor(props){
	super(props);

	this.state = {
    visible: false,
	}
}




render(){
  return(
    <ol>
      {this.props.urls.map((url, i) => {
        console.log('URRRL', url);
     	  return(
         <a key={i} href={this.props.link} target='_blank'> <li> {this.props.title} </li> </a>
        );
       })}
    </ol>
  );
 }
}


export default List;
