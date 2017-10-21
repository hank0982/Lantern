import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { StackNavigator } from 'react-navigation';
import {timelineAPI} from '../API/APIs';
import BarCodeScanStyle from '../StyleSheets/BarCodeScanStyle';

function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), time);
  });
}
export default class BarCodeScan extends Component {
  state = {
    read: null,
    hasCameraPermission: null
  };
  static navigationOptions = BarCodeScanStyle.navigationOptions;

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = async data => {
    await delay(500);
    if (this.state.read == data.data) return;
    this.setState({ read: data.data });

    if(data.type == "org.iso.PDF417"){
      var start = data.data.split(" ")[10].slice(0,3);
      var end = data.data.split(" ")[10].slice(3,6);
      var flightCode = data.data.split(" ")[10].slice(6,8).concat(data.data.split(" ")[11]);
      var name = data.data.split(" ")[0].slice(2);
      var perData = {
        start : start,
        end : end,
        flightCode : flightCode,
        name : name
      }
      timelineAPI.addActivityArray(this.props.screenProps.firebase, '20171023', 10*60);
      this.props.navigation.navigate('TimeLine');
    }
  };

  render() {
    return (
      <View style={BarCodeScanStyle.stylesheet.container}>
        <Text> Please Scan your Ticket's Barcode </Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 400, width: 400 }}
            />
        }
      </View>
    );
  }
}

