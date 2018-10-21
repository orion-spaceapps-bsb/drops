import React from 'react';
import { View, Input, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Form = props => {
  const { label } = props;

  return (
    <View style={style.content}>
      <Text>{label}</Text>
      <TextInput
        style={style.input}
        onChangeText={console.log('mudou')}
        value={''}
      />
    </View>);
};

Form.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Form;
