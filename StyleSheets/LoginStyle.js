import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
loginStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        paddingTop: 75,
        backgroundColor: '#E9ECEB'
    },
    texts: {
        color: '#016565'
    }
});
navigationOptions = {
    title: 'Login',
    headerTintColor: '#016565',
    headerStyle: {
        backgroundColor: '#E9ECEB',
        elevation: null
    }
};
textInput = { baseColor: '#000000', tintColor: '#000000', label: 'Username', textColor: '#000000' }
module.exports = { stylesheet: loginStyleSheet, navigationOptions: navigationOptions, textInput: textInput };