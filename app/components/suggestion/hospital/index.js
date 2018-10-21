import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../header';
import Finantial from '../../finantial';

import style from './style';

const HospitalSuggestion = props => {

  return (
    <View style={style.screen}>
      <Header back={true} navigate={() => props.navigation.pop()}/>
      <View style={style.content}>
        <Text style={style.title}>Saúde Básica</Text>
        <Text>Você poderá construir 3 hospital(is) com o dinheiro economizado ao prevenir as inundações e enchentes em seu território.</Text>
      </View>
      <Finantial title={'Custo médio para criação de um hospital:'} value={27500000} />
      <Finantial title={'Custo médio mensal de um hospital:'} value={2700000} />
    </View>
  );
};

export default HospitalSuggestion;
