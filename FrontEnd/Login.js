import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginStyle from '../StyleSheets/LoginStyle';
import TextField from 'react-native-md-textinput';
import Button from 'apsl-react-native-button';
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
            <View style = {{width: '75%'}}>
                <TextField  textColor = {'#FFFFFF'} label={'Username'} highlightColor={'#FAA916'} />
                <TextField secureTextEntry={true} textColor = {'#FFFFFF'} label={'Password'} highlightColor={'#FAA916'} />
                <View style = {{paddingTop: 20}}>
                <Button style={{backgroundColor: '#FAA916'}} textStyle={{fontSize: 18, color: '#FFFFFF'}}>
                    Login
                </Button>
                </View>
            </View>
        </View>
      );
    }
  };
