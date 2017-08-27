import React from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  Button
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

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

class CalenderScreen extends React.Component{
  static navigationOptions = {
    title: 'CALENDER',
  };
  constructor(props) {
    super(props);
    this.state = {
      items: {} }
}

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2017-08-26'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  loadItems(day) {
    item: {
      text: "test",
      height: 86
    }
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

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
  Chat: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
});
