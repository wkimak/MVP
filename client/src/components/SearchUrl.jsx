import React from 'react';

/* -------- Level 2 ------- */
class SearchUrl extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        inputVal: ''
      }
    this.getUrl = this.getUrl.bind(this);
  }


  getUrl(event){
    this.setState({
      inputVal: event.target.value
    });
  }

  render(){
    return(
      <div>
        <form>
          <input value={this.state.inputVal} onChange={this.getUrl} placeholder='Search URL' className='searchInput' type='text' />
          <button onClick={(event) => { event.preventDefault(); this.props.search(this.state.inputVal)}}> Submit </button>
        </form>
      </div>  
    );
  }
}

export default SearchUrl;