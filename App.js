import React from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Calender } from './src/calender';

class HomeScreen extends React.Component{
  static navigationOptions = {
    title: 'CHATS',
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
      <Button
        onPress={() => navigate('Chat')}
        title="class"
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component{
  static navigationOptions = {
    title: 'CALENDER',
  };
  render(){
    return(
    <Calender />
    )
  }
}

class PaperScreen extends React.Component{
  static navigationOptions = {
    title: 'PAPERS',
  };
  render(){
    return(
      <View>
        <Text>Chat with me!</Text>
      </View>
    )
  }
}


export default MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Paper: { screen: PaperScreen},
});
