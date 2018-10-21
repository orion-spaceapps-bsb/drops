import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import style from './style';

const symbol = require('../../../assets/location.png');

class Boarding extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      loading: false,
      error: null,
    };
  }

  openDashboard = () => {
    const { navigate } = this.props.navigation;

    this.setState({ loading: true });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.setState({ loading: false });
        navigate('Dashboard');
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={style.loading}>
          <Text style={style.load}>Carregando dados...</Text>
          <ActivityIndicator size="large" color="#57CFF7" />
        </View>
      );
    }
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
  }
};

export default Boarding;
