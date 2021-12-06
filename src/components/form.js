import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.weatherMethods}>
        <input type='text' name='city' placeholder='Назва міста'></input>
          <button>Що там надворі?!</button>
      </form>
    )
  }
}

export default Form