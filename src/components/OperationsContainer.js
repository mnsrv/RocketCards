import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import containers from '../style/containers';
import text from '../style/text';
import Operation from './Operation';

export default class OperationsContainer extends Component {
  render() {
    return (
      <View style={[containers.leftRight, containers.operations]}>
        <View style={containers.line}>
          <Text style={[text.small, text.gray]}>Сегодня</Text>
          <Text style={[text.small, text.gray, text.opacity]}>– 4328 &#8381;</Text>
        </View>
        <Operation image={require('../../public/images/perekrestok.jpg')} title="Перекресток Экспресс" price="1500" />
        <Operation image={require('../../public/images/mcdonalds.jpg')} title="Макдоналдс" price="100" />
        <Operation image={require('../../public/images/rodin.jpg')} title="Кристине Мартиросовой" subtitle="#Обед" price="250" />
      </View>
    );
  }
}
