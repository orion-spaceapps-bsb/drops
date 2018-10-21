import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, Picker, ActivityIndicator } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import axios from 'axios';

import Header from '../header';
import Form from '../form';

import style from './style';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      soilRunoff: 30,
      area: null,
      population: null,
      loading: false,
    };
  };

  endGet = (response) => {
    console.log(response);
    const { navigate } = this.props.navigation;
    navigate('Impact', {
      preventionCost: response.data.preventionCost,
      reparationCost: response.data.reparationCost,
    });
    this.setState({ loading: false });
  };

  openImpact = () => {
    const lat = this.props.navigation.getParam('latitude', '0');
    const lon = this.props.navigation.getParam('longitude', '0');

    this.setState({ loading: true });
    axios.get(`http://6e7eae8d.ngrok.io/projects?lat=${parseInt(lat) + 0.875}&lon=${parseInt(lon) + 0.875}&soilRunoff=${this.state.soilRunoff}&area=${this.state.area}&population=${this.state.population}`)
    .then((response) => this.endGet(response))
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  changePiker = (itemValue) => {
    this.setState({soilRunoff: itemValue})
  }

  render () {
    if (this.state.loading) {
      return (
        <View style={style.loading}>
          <Text style={style.load}>Carregando dados...</Text>
          <ActivityIndicator size="large" color="#57CFF7" />
        </View>
      );
    }
    return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Header />
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <View style={[style.content, { alignItems: 'center' }]}>
          <View style={style.inputContent}>
            <Text>Quantidade de habitantes</Text>
            <TextInput
              style={style.input}
              onChangeText={(text) => this.setState({ population: text })}
              value={this.state.population}
            />
            <KeyboardSpacer />
          </View>
          <View style={style.inputContent}>
            <Text>Área da cidade (em km2):</Text>
            <TextInput
              style={style.input}
              onChangeText={(text) => this.setState({ area: text })}
              value={this.state.area}
            />
            <KeyboardSpacer />
          </View>
          <Picker
            style={{ height: 50, width: '100%' }}
            selectedValue={this.state.soilRunoff}
            onValueChange={(itemValue) => this.setState({soilRunoff: itemValue})}>
            <Picker.Item label="Rocha" value="70" />
            <Picker.Item label="Argila compacta" value="60" />
            <Picker.Item label="Terra arenosa" value="50" />
            <Picker.Item label="Areia fina" value="40" />
            <Picker.Item label="Cascalho" value="30" />
          </Picker>
        </View>
        <TouchableOpacity style={[style.button, style.centered]} onPress={this.openImpact}>
          <Text style={style.buttonText}>Calcular!</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }
};

export default Dashboard;
