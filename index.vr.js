import React, { Component } from 'react'
import { View, Text, Pano, AppRegistry, asset } from 'react-vr'

const api_key = '87b346f0630aa62690df7e45c57d1b86'

class WeatherSimulator extends Component {
  constructor() {
    super()

    this.state = {
      WeatherObject: {}
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&appid=${api_key}`,
    {
      method: 'GET'
    })
    .then( response => response.json() )
    .then( json => this.setState({weatherObject: json}))
  }

  render() {
    return(
      <View>
        <Pano source={ asset('lombard-vr.jpg') } />
      </View>
    )
  }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator)
