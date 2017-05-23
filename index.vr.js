import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  View,
  Pano,
} from 'react-vr';

import API_KEY from './config';
import WeatherCard from './vr/components/WeatherCard';
import WindCloudObject from './vr/components/WindCloudObject';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const CITY = 'Yerevan';

class WeatherSimulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherObject: {
        name: '',
        main: {
          temp: 0,
        },
        weather: [
          { description: '' },
        ],
        wind: {
          deg: 1,
          speed: 1,
        },
      },
    };
  }

  componentDidMount() {
    fetch(
      `${URL}?q=${CITY}&appid=${API_KEY}`,
      { method: 'GET' },
    )
      .then(response => response.json())
      .then(json => this.setState({ weatherObject: json }));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Pano source={asset('background.jpg')} />
        <WeatherCard weatherObject={this.state.weatherObject} />
        <WindCloudObject wind={this.state.weatherObject.wind}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
