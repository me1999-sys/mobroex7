import React,{Component  } from 'react';
import {Text, View, SytleSheet} from 'react-native';
import Title from './components/Welcome/index';

class App extends Component {
  render(){
    const Title ='Welcome';
    return (
      <View>
        <Title />
      </View>
    )
  }
}

export default App;