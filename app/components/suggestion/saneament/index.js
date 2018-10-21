import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../header';
import Finantial from '../../finantial';

import style from './style';

const SaneamentSuggestion = props => {

  return (
    <View style={style.screen}>
      <Header back={true} navigate={() => props.navigation.pop()}/>
      <View style={style.content}>
        <Text style={style.title}>Saneamento Básico</Text>
        <Text>Você poderá alavancar o Saneamento Básico com o dinheiro economizado ao prevenir as inundações e enchentes em seu território.</Text>
      </View>
      <Finantial title={'Custo médio para ampliação de saneamento:'} value={27500000} />
      <Finantial title={'Custo médio mensal de saneamento:'} value={2700000} />
    </View>
  );
};

export default SaneamentSuggestion;
