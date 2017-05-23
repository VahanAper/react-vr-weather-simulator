import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  View,
  Pano,
} from 'react-vr';

import API_KEY from './config';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const CITY = 'Yerevan';

class WeatherSimulator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherObject: {},
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
      <View>
        <Pano source={asset('background.jpg')} />
      </View>
    );
  }
}

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
