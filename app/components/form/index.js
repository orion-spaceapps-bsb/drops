import React from 'react';
import { View, Text, TextInput } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
      <KeyboardSpacer />
    </View>);
};

Form.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Form;
