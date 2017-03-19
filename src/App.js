import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
} from 'react-native';
import containers from './style/containers';
import CardsContainer from './components/CardsContainer';
import OperationsContainer from './components/OperationsContainer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  render() {
    return (
      <View style={containers.top}>
        <Animated.ScrollView
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            { useNativeDriver: true },
          )}>
          <CardsContainer scrollY={this.state.scrollY} />
          <OperationsContainer />
        </Animated.ScrollView>
      </View>
    );
  }
}
