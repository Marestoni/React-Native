import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  };

  render(){
    return(
      <View>
        <Text>Tela home!!</Text>
        <Button 
        title="Contato"
        onPress={()=> this.props.navigation.navigate('Contato',{nome: 'André', idade: 28})}
        />
      </View>
    );
  }
}

export default Home;