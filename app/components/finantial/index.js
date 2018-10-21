import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Finantial = props => {

  const { title, value } = props;

  return (
    <View style={style.content}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.body}>$ {value.toLocaleString('pt-BR')}</Text>
    </View>);
};

Finantial.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Finantial;
