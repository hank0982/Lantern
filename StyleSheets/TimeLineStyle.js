import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
TimeLineStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 65,
        backgroundColor: 'white'
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
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
    title: 'Register',
    headerTintColor: "#FAA916",
    headerStyle: {
        backgroundColor: '#E9ECEB',
        elevation: null
    }
};
textInput = { baseColor: '#000000', tintColor: '#000000', label: 'Username', textColor: '#000000' }
module.exports = { stylesheet: TimeLineStyleSheet, navigationOptions: navigationOptions, textInput: textInput };