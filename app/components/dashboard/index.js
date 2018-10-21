import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Header from '../header';
import Form from '../form';

import style from './style';

const Dashboard = props => {

  const { navigate } = props.navigation;

  openImpact = () => {
    navigate('Impact');
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header />
      <View style={{ alignItems: 'center' }}>
        <View style={[style.content, { alignItems: 'center' }]}>
          <Form label={'Cidade: '} />
          <Form label={'Quantidade de habitantes: '} />
          <Form label={'Tipo de solo: '} />
          <Form label={'Área da cidade: '} />
        </View>
        <TouchableOpacity style={[style.button, style.centered]} onPress={this.openImpact}>
          <Text style={style.buttonText}>Calcular!</Text>
        </TouchableOpacity>
      </View>
    </View>);
};

export default Dashboard;
