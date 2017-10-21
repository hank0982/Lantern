import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RegisterStyle from '../StyleSheets/RegisterStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import {RegisterAPI} from '../API/APIs';
export default class Login extends React.Component {
    constructor(){
      super();
      this.state = {
          username: '',
          password: ''
      }
    }
    onSubmitPress(){
        
    }
    static navigationOptions = RegisterStyle.navigationOptions;
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={RegisterStyle.stylesheet.container}>
            <View style = {{width: '70%'}}>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Username' textColor = {RegisterStyle.textInput.textColor} onChangeText = {(username) => this.setState({username: username})}/>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Password' secureTextEntry={true} textColor = {RegisterStyle.textInput.textColor}  onChangeText = {(password) => this.setState({password: password})}/>
            <TextField baseColor={RegisterStyle.textInput.baseColor} tintColor={RegisterStyle.textInput.tintColor} label='Re-Password' secureTextEntry={true} textColor = {RegisterStyle.textInput.textColor}  onChangeText = {(password) => this.setState({password: password})}/>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#016565'}} textStyle={{fontSize: 18, color: '#E9ECEB'}} onPress={()=>this.onSubmitPress()}>
                        Submit
                    </Button>
                </View>
            </View>
        </View>
      );
    }
  };
