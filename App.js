import React from 'react';
import { SafeAreaView } from 'react-native';
import Root from './app/index';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Root />
      </SafeAreaView>
    );
  }
}
