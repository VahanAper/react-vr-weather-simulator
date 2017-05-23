import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-vr';

const styles = StyleSheet.create({
  weatherCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 0.1,
    borderColor: '#000',
    borderWidth: 0.05,
    padding: 0.5,
    layoutOrigin: [-0.5, 0],
    transform: [
      { translate: [-3, 0, -7] },
    ],
  },
  weatherText: {
    textAlign: 'center',
    fontSize: 0.3,
    color: '#000',
  },
});

class WeatherCard extends Component {
  render() {
    const {
      name,
      weather: { 0: { description } },
      main: { temp },
    } = this.props.weatherObject;

    return (
      <View style={styles.weatherCard}>
        <Text style={styles.weatherText}>{name}</Text>
        <Text style={styles.weatherText}>Current Weather: {description}</Text>
        <Text style={styles.weatherText}>Temperature: {temp}</Text>
      </View>
    );
  }
}

export default WeatherCard;
