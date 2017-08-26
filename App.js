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
  render(){
    return(
      <Agenda
      // the list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key kas to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={
        {'2017-08-31': [{text: 'item 1 - any js object'}],
         '2017-08-30': [{text: 'item 2 - any js object'}],
         '2017-08-29': [],
         '2017-08-28': [{text: 'item 3 - any js object'},{text: 'any js object'}],
        }}
      // callback that gets called when items for a certain month should be loaded (month became visible)
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      // callback that gets called on day press
      onDayPress={(day)=>{console.log('day pressed')}}
      // callback that gets called when day changes while scrolling agenda list
      onDayChange={(day)=>{console.log('day changed')}}
      // initially selected day
      selected={'2017-08-26'}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2012-05-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={'2012-05-30'}
      // specify how each item should be rendered in agenda
      renderItem={(item, firstItemInDay) => {return (<View />);}}
      // specify how each date should be rendered. day can be undefined if the item is not first in that day.
      renderDay={(day, item) => {return (<View />);}}
      // specify how empty date content with no items should be rendered
      renderEmptyDate={() => {return (<View />);}}
      // specify how agenda knob should look like
      renderKnob={() => {return (<View />);}}
      // specify your item comparison function for increased performance
      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
      // Hide knob button. Default = false
      hideKnob={true}
      // agenda theme
      // theme={{
      //   ...calendarTheme,
      //   agendaDayTextColor: 'yellow',
      //   agendaDayNumColor: 'green',
      //   agendaTodayColor: 'red',
      //   agendaKnobColor: 'blue'
      // }}
      // agenda container style
      style={{}}
  />
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
  Chat: { screen: CalenderScreen },
  Paper: { screen: PaperScreen},
});
