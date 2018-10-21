import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import style from './style';

const segue = require('../../../assets/segue.png');

const Investiments = props => {

  const { navigate } = props;
  
  openHospitalSuggestion = () => {
    navigate('HospitalSuggestion');
  };

  openEducationSuggestion = () => {
    navigate('EducationSuggestion');
  };

  openSaneamentSuggestion = () => {
    navigate('SaneamentSuggestion');
  };

  return (
    <View style={style.content}>
      <Text style={style.title}>Investimentos</Text>
      <View style={style.card}>
        <TouchableOpacity style={[style.cell]} onPress={this.openHospitalSuggestion}>
          <Text style={style.cellText}>Saúde Básica</Text>
          <Image source={segue} style={style.segue} />
        </TouchableOpacity>
        <View style={style.horizontalLine} />
        <TouchableOpacity style={[style.cell]} onPress={this.openEducationSuggestion}>
          <Text style={style.cellText}>Educação Pública</Text>
          <Image source={segue} style={style.segue} />
        </TouchableOpacity>
        <View style={style.horizontalLine} />
        <TouchableOpacity style={[style.cell]} onPress={this.openSaneamentSuggestion}>
          <Text style={style.cellText}>Saneamento Básico</Text>
          <Image source={segue} style={style.segue} />
        </TouchableOpacity>
      </View>
    </View>);
};

export default Investiments;
