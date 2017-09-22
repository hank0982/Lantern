  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import Timeline from 'react-native-timeline-listview';
  import Timetable from './Timetable';
  export default class App extends React.Component {
    constructor(){
      super();
      this.data = [
        {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
        {time: '10:00', title: 'Event 2', description: 'Event 2 Description'}
        
      ]
    }
    render() {
      return (
        <View style={styles.container}>
        <Timetable/>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      paddingTop:65,
      backgroundColor: '#62929E'
    },
  });
