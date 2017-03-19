import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import formatPrice from '../utils/formatPrice';
import containers from '../style/containers';
import text from '../style/text';

export default class Operation extends Component {
  render() {
    return (
      <View style={containers.line}>
        <View style={containers.image}>
          <Image source={this.props.image} style={containers.imageSizes} />
        </View>
        <View style={containers.info}>
          <View style={containers.text}>
            <Text style={text.p}>{this.props.title}</Text>
            {this.props.subtitle ? <Text style={[text.p, text.gray]}>{this.props.subtitle}</Text> : null}
          </View>
          <Text style={text.p}>– {formatPrice(this.props.price)} &#8381;</Text>
        </View>
      </View>
    );
  }
}
