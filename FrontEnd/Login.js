import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginStyle from '../StyleSheets/LoginStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import {LoginAPI} from '../API/APIs';
export default class Login extends React.Component {
    constructor(){
      super();
      this.state = {
          username: '',
          password: ''
      }
    }
    // Config header check
    static navigationOptions = LoginStyle.navigationOptions;
    onLoginPress(){
        LoginAPI.loginWithEmail(this.props.screenProps.firebase, this.state.username, this.state.password);
        this.props.navigation.navigate('BarCodeScan');
    }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={LoginStyle.stylesheet.container}>
            <View style = {{width: '70%'}}>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: '../Assets/Logomakr_3EDWIY.png'}}
            />
                <TextField baseColor={LoginStyle.textInput.baseColor} tintColor={LoginStyle.textInput.tintColor} label='Username' textColor = {LoginStyle.textInput.textColor} onChangeText = {(username) => this.setState({username: username})}/>
                <TextField baseColor={LoginStyle.textInput.baseColor} tintColor={LoginStyle.textInput.tintColor} label='Password' secureTextEntry={true} textColor = {LoginStyle.textInput.textColor}  onChangeText = {(password) => this.setState({password: password})}/>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#016565', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#E9ECEB'}} onPress={()=>this.onLoginPress()}>
                        Log In
                    </Button>
                </View>
                <View style = {{paddingTop: 20}}>
                    <Button style={{backgroundColor: '#E9ECEB', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#016565'}} onPress={()=>navigate('RegPre')}>
                        Register
                    </Button>
                </View>
            </View>
        </View>
      );
    }
  };
