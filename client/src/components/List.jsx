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
     <li> {this.props.urls[0]} </li>
   </ul>
  );

}
}


export default List;
