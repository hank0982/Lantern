import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

TimeLineStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 20,
        backgroundColor: '#E9ECEB'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#CAAE03'
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
});
navigationOptions = {
    title: 'TimeLine',
    headerTintColor: "#016565",
    headerStyle: {
        backgroundColor: '#E9ECEB',
        elevation: null
    }
};
module.exports = { stylesheet: TimeLineStyleSheet, navigationOptions: navigationOptions, textInput: textInput };