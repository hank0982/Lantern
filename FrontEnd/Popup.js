import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import RegisterStyle from '../StyleSheets/RegisterStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import {RegisterAPI} from '../API/APIs';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
});
const menus = [
    {
       text:'Movies',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Games',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Music',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Television',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Shopping',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Magazine',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    }

];
export default class Popup extends React.Component {
    
    constructor(){
      super();
      this.state = {
          username: '',
          password: '',
          repwd:''
      }
    }
    onPressButtonMenu(menu) {
        console.log(menu.text);
    }
    render() {
        const slideAnimation = new SlideAnimation({
            slideFrom: 'right',
        });

      return (
        <View style={styles.container}>
        
      </View>
      );
    }
  };
