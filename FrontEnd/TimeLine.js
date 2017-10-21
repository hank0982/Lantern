import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timeline from 'react-native-timeline-listview';
export default class TimeLine extends React.Component {
    constructor() {
        super();
        this.data = [
            { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
            { time: '10:00', title: 'Event 2', description: 'Event 2 Description' }

        ]
    }
    render() {
        return ( < Timeline data = { this.data }/> );
    }
}