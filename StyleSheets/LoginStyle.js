import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        paddingTop: 65,
        backgroundColor: '#000000',
    },
    texts: {
        color: '#FFFFFF'
    },
    navigationOptions: {
        title: 'Login',
        headerTintColor: "#FAA916",
        headerStyle: {
            backgroundColor: 'black',
            elevation: null
        }
    }
});