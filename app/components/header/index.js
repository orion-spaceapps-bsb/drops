import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import style from './style';

const logo = require('../../../assets/blue_icon.png');
const backImg = require('../../../assets/back.png');

const Header = props => {
  
  const { back, navigate } = props;

  renderBack = () => {
    return (
      <TouchableOpacity onPress={navigate} style={{ flex: 1, zIndex: 2 }}>
        <Image source={backImg} style={style.back} />
      </TouchableOpacity>
    );
  };

  return (<View style={style.header}>
    { back ? renderBack() : null }
    <View style={[style.content, style.centered]}>
      <Image source={logo} style={style.logo} />
    </View>
    <View style={[style.horizontalLine, style.shadow]} />
  </View>);
};

export default Header;
