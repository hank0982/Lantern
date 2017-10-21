  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { StackNavigator } from 'react-navigation';
  import Login from './FrontEnd/Login';
  import BarCodeScan from './FrontEnd/BarCodeScan';
  import RegPre from './FrontEnd/RegPre';
  import TimeLine from './FrontEnd/TimeLine';
  import * as firebase from 'firebase';
  import firebaseConfig from './key';
  firebase.initializeApp(firebaseConfig);
  const Pages = StackNavigator({
    Home : { screen: Login },
    BarCodeScan : {screen: BarCodeScan},
    RegPre : {screen: RegPre},
    TimeLine : {screen : TimeLine}
  });
  export default class App extends React.Component {
    constructor(){
      super();
      this.state = {
          user: null
      }
    }
    changeUser(user){
      if(user){
        this.setState({
          user: user
        });
        return true;
      }
    }
    render(){
      return <Pages screenProps = {{firebase: firebase, user: this.state.user, setUser: this.changeUser.bind(this)}}/>;
    }
  }
  