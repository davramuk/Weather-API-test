import React from 'react';

class Weather extends React.Component {
  render(){
    return(
      <div>
          {this.props.city &&
          <div>
        <p>Місцерозташування: {this.props.city} {this.props.country}</p>
        <p>Температура: {this.props.temp}</p>
        <p>Схід сонця: {this.props.sunrise}</p>
        <p>Захід сонця: {this.props.sunset}</p>
            </div>
          }
      
      </div>
    )
  }
}

export default Weather