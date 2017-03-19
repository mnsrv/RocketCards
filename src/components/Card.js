import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Animated,
} from 'react-native';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      y: 0,
    };
  }

  render() {
    const WINDOW_HEIGHT = Dimensions.get('window').height;
    const CARD_WIDTH = Dimensions.get('window').width - 50;
    const CARD_HEIGHT = (Dimensions.get('window').width - 50) * 432/686;
    const rotateX = this.props.scrollY.interpolate({
      inputRange: [
        this.state.y - WINDOW_HEIGHT * 2,
        this.state.y - CARD_HEIGHT / 2,
        this.state.y,
      ],
      outputRange: [
        '-60deg',
        '-20deg',
        '0deg'
      ],
      extrapolate: 'clamp',
    });
    let translateY = this.props.height == 0 ? 0 : this.props.scrollY.interpolate({
        inputRange: [
          this.state.y - WINDOW_HEIGHT * 2,
          this.state.y,
          this.state.y + this.props.height,
        ],
        outputRange: [
          -CARD_HEIGHT,
          0,
          this.props.height,
        ],
        extrapolate: 'clamp',
      });
    const scale = this.props.scrollY.interpolate({
      inputRange: [
        this.state.y,
        this.state.y + CARD_HEIGHT
      ],
      outputRange: [1, 0.95],
      extrapolate: 'clamp',
    });
    const opacity = this.props.scrollY.interpolate({
      inputRange: [
        this.state.y,
        this.state.y + CARD_HEIGHT,
      ],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return <View
      onLayout={({nativeEvent}) => {
        this.setState({
          y: nativeEvent.layout.y,
        });
      }}
    >
      <Animated.Image
        source={ require('../../public/images/card.png')}
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          transform: [
            {perspective: 1000},
            {translateY: translateY},
            {rotateX: rotateX},
            {scale: scale},
          ],
          opacity: opacity,
        }}
      />
    </View>;
  }
}
