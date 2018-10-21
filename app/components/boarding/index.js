import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import style from './style';

const symbol = require('../../../assets/location.png');

const Boarding = props => {
  
  const { navigate } = props.navigation;

  openDashboard = () => {
    navigate('Dashboard');
  };

  return (
    <View style={[style.content, { alignItems: 'center' }]}>
      <View style={[style.viewImg, style.centered]}>
        <Image source={symbol} style={style.img} />
      </View>
      <Text style={style.title}>Compartilhe sua localização!</Text>
      <View style={[style.bodyView, style.centered]}>
        <Text style={style.body}>Com ela poderemos fazer leituras via satélite de dados históricos com relação a chuvas e escoamento de água da sua região!</Text>
      </View>
      <View style={[style.horizontalLine, style.shadow]} />
      <TouchableOpacity style={[style.button, style.centered]} onPress={this.openDashboard}>
        <Text style={style.buttonText}>Ativar localização!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[style.centered, { marginTop: 20 }]}>
        <Text style={{ color: '#82AABE', fontSize: 12, fontWeight: 'bold' }}>Não, obrigado :(</Text>
      </TouchableOpacity>
    </View>);
};

export default Boarding;
