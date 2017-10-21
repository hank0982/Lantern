import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

loginStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    texts: {
        color: '#016565'
    }
});
navigationOptions = {
    title: 'BarCodeScanner',
    headerTintColor: '#016565',
    headerStyle: {
        backgroundColor: '#E9ECEB',
        elevation: null
    }
};
textInput = { baseColor: '#000000', tintColor: '#000000', label: 'Username', textColor: '#000000' }
module.exports = { stylesheet: loginStyleSheet, navigationOptions: navigationOptions, textInput: textInput };