  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import Login from './FrontEnd/Login';
  import BarCodeScan from './FrontEnd/BarCodeScan';
  
  const Pages = StackNavigator({
    Home : { screen: Login },
    BarCodeScan : {screen: BarCodeScan}
  });
  export default class App extends React.Component {
    render(){
      return <Pages />;
    }
  }
  