import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
const API_KEY = 'd3e28e941bf2247e8080b1dbf779cb9d'


class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  
  gettingWeather = async(event) => {
    event.preventDefault()
    const city = event.target.elements.city.value;

    if (city) {

    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const data = await api_url.json();
    console.log(data)

    if (data.cod === "404"){
      this.setState({
        city: 'Не знайдено',
        temp: '-',
        sunrise: '-',
        sunset: '-'
      })  
    }
    else{

    

    let sunset = data.sys.sunset 
    let date = new Date(sunset * 1000)
    let timeSunset = date.toLocaleTimeString()

    let sunrise = data.sys.sunrise
    let date1 = new Date(sunrise * 1000)
    let timeSunrise = date1.toLocaleTimeString()    
    let tempCelc = Math.round(data.main.temp - 273.15)

    this.setState({
      temp: tempCelc,
      city: data.name,
      country: data.sys.country, 
      sunrise: timeSunrise,
      sunset: timeSunset,
      error: ''
    })
    }
  }
  }

  render(){
    return(
      <div className='wrapper'>
        <div className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5 info'> <Info/></div>
          <div className='col-sm-7 form'>
        <Form weatherMethods = {this.gettingWeather}/>
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}/>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
export default App
