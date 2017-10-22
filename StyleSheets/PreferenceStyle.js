import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
preStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
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
module.exports = { stylesheet: preStyleSheet, navigationOptions: navigationOptions, textInput: textInput };