  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import Login from './FrontEnd/Login';
  const Pages = StackNavigator({
    Login : { screen: Login },
  });

  export default class App extends React.Component {
    render(){
      return <Pages />;
    }
  }
  