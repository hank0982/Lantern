import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
registerStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        paddingTop: 15,
        backgroundColor: '#E9ECEB',
    },
    texts: {
        color: '#016565'
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
module.exports = { stylesheet: registerStyleSheet, navigationOptions: navigationOptions, textInput: textInput };