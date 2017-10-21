import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class BarCodeScan extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
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
      this.props.navigation.navigate('TimeLine');
    }
  };

  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});