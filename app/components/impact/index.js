import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../header';

import style from './style';
import Finantial from '../finantial';
import Investiments from '../investiments';

const Impact = props => {

  const { navigate } = props.navigation;

  openReport = () => {
    navigate('Report');
  };

  return (
    <View style={style.content}>
      <Header back={true} navigate={() => props.navigation.pop()}/>
      <Finantial title={'Custo de sistema de prevenção:'} value={8500000} />
      <Finantial title={'Custo da reparação dos danos:'} value={590000000} />
      <View style={style.horizontalLine} />
      <Investiments navigate={navigate} />
      <TouchableOpacity style={[style.button, style.centered]} onPress={this.openReport}>
        <Text style={style.buttonText}>Gerar Relatório!</Text>
      </TouchableOpacity>
    </View>);
};

export default Impact;
