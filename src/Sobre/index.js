import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Sobre extends Component {
  static navigationOptions = {
    title: 'Sobre',
    header: null
  };

  render(){
    return(
      <View>
        <Text>Tela sobre!!</Text>
        <Button 
        title="Contato"
        onPress={()=> this.props.navigation.goBack()}
        />
        <Button 
        title="Inicio"
        onPress={()=> this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

export default Sobre;