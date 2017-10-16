  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import Login from './FrontEnd/Login';
  import BarCodeScan from './FrontEnd/BarCodeScan';
  import * as firebase from 'firebase';
  import firebaseConfig from './key';
  firebase.initializeApp(firebaseConfig);
  const Pages = StackNavigator({
    Home : { screen: Login },
    BarCodeScan : {screen: BarCodeScan}
  });
  export default class App extends React.Component {
    render(){
      return <Pages screenProps = {{firebase: firebase}}/>;
    }
  }
  