import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import TimeLineStyle from '../StyleSheets/TimeLineStyle';
export default class TimeLine extends React.Component {
    constructor() {
        super();
        this.data = [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:00', title: 'Event 2', description: 'Event 2 Description' }

        ]
    }
    render() {

        return (
        <View style={TimeLineStyle.stylesheet.container}>
            <Timeline data = { this.data }/> 
        </View>
      );
    }
}