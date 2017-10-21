  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import Login from './FrontEnd/Login';
  import BarCodeScan from './FrontEnd/BarCodeScan';
  import RegPre from './FrontEnd/RegPre';
  import * as firebase from 'firebase';
  import firebaseConfig from './key';
  firebase.initializeApp(firebaseConfig);
  const Pages = StackNavigator({
    Home : { screen: Login },
    BarCodeScan : {screen: BarCodeScan},
    RegPre : {screen: RegPre}
  });
  export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
          user: null
      }
    }
    changeUser(user){
      this.setState({
        user: user
      })
    }
    render(){
      return <Pages screenProps = {{firebase: firebase, user: this.state.user, setUser: this.changeUser.bind(this)}}/>;
    }
  }
  