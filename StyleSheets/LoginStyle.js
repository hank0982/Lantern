import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
loginStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        paddingTop: 65,
        backgroundColor: '#000000',
    },
    texts: {
        color: '#4A9191'
    }
});
navigationOptions = {
    title: 'Login',
    headerTintColor: "#FAA916",
    headerStyle: {
        backgroundColor: 'black',
        elevation: null
    }
};
textInput = { baseColor: '#FAA916', tintColor: '#FFFFFF', label: 'Username', textColor: '#FFFFFF' }
module.exports = { stylesheet: loginStyleSheet, navigationOptions: navigationOptions };