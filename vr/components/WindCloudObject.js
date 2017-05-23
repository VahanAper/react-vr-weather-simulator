import React, { Component } from 'react';
import { Model, asset, Animated } from 'react-vr';

class WindCloudObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xValue: new Animated.Value(100),
    };

    setInterval(() => this.animateCloud(), 3000);
  }

  componentDidMount() {
    this.animateCloud();
  }

  animateCloud() {
    if (this.state.xValue._value < 0) {
      this.setState({
        xValue: new Animated.Value(100),
      });
    }

    Animated.timing(this.state.xValue, {
      toValue: -100,
      duration: 3000 / this.props.wind.speed,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            { translate: [0, -25, -150] },
            { rotateX: -90 },
            { rotateZ: this.props.wind.deg },
            { translateX: this.state.xValue },
          ],
        }}
      >
        <Model
          scale={0.01}
          source={{
            obj: asset('multi_clouds.obj'),
          }}
        />
      </Animated.View>
    );
  }
}

export default WindCloudObject;
