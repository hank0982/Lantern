import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginStyle from '../StyleSheets/LoginStyle';
export default class Login extends React.Component {
    constructor(){
      super();
    }
    // Config header check
    static navigationOptions = {
        title: 'Login',
        headerTintColor: "#FAA916", 
        headerStyle: {
            backgroundColor: 'black',
            elevation: null
        }       
    };
    render() {
      return (
        <View style={LoginStyle.container}>
            <Text style = {LoginStyle.texts}> Hi Hi </Text>
        </View>
      );
    }
  };
