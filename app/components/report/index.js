import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import style from './style';

const topImage = require('../../../assets/report.png');
const black = require('../../../assets/black.png');

const screenWidth = Dimensions.get('window').width;

const Report = props => {

  pop = () => {
    props.navigation.pop();
  };

  return (
    <ScrollView style={style.content}>
      <TouchableOpacity style={style.exitVw} onPress={this.pop}>
        <Image source={black} style={style.exit} />
      </TouchableOpacity>
      <View style={style.top}>
        <Image source={topImage} resizeMode="contain" style={{ height: 500, width: screenWidth }} />
      </View>
    </ScrollView>
  );
};

export default Report;
