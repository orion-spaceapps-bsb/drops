import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../header';

import style from './style';
import Finantial from '../finantial';
import Investiments from '../investiments';

const Impact = props => {

  const { navigate } = props.navigation;

  const preventionCost = props.navigation.getParam('preventionCost', '0');
  const reparationCost = props.navigation.getParam('reparationCost', '0');

  console.log(preventionCost);
  console.log(reparationCost);
  openReport = () => {
    navigate('Report');
  };

  return (
    <View style={style.content}>
      <Header back={true} navigate={() => props.navigation.pop()}/>
      <Finantial title={'Custo de sistema de prevenção:'} value={parseInt(preventionCost)} />
      <Finantial title={'Custo da reparação dos danos:'} value={parseInt(reparationCost)} />
      <View style={style.horizontalLine} />
      <Investiments navigate={navigate} />
      <TouchableOpacity style={[style.button, style.centered]} onPress={this.openReport}>
        <Text style={style.buttonText}>Gerar Relatório!</Text>
      </TouchableOpacity>
    </View>);
};

export default Impact;
