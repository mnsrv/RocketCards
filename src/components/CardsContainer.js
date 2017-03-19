import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import containers from '../style/containers';
import Card from './Card';

export default class CardsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    }
  }

  render() {
    return (
      <View
        style={containers.leftRight}
        onLayout={({nativeEvent}) => {
          this.setState({
            height: nativeEvent.layout.height,
          });
        }}
      >
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
        <Card height={this.state.height} scrollY={this.props.scrollY} />
      </View>
    );
  }
}
