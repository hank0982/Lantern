import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PreferenceStyle from '../StyleSheets/PreferenceStyle';
import Button from 'apsl-react-native-button';
import { TextField } from 'react-native-material-textfield';
import Slider from 'react-native-slider';
export default class Pre extends React.Component {
    constructor(){
      super();
      this.state = {
        wake: 9,
        sleep:22,
      }
    }

    static navigationOptions = PreferenceStyle.navigationOptions;
    render() {
      const { navigate } = this.props.navigation;
      return (
      <View style={PreferenceStyle.stylesheet.container}>
        <View>
          <Text>Wake up time: {this.state.wake}:00</Text>
        </View>
              <View style={{width:'90%'}}>
              <Slider
                  value={9}
                  step={1}
                  maximumValue={12}
                  minimumValue={3}
                  onValueChange={(value) => this.setState({wake: value})}
              />
              </View>
              <View style={{width:'90%'}}>
              <View style={{alignItems:'center', paddingTop:30}}>
              <Text>Bedtime: {this.state.sleep}:00</Text>
              </View>
              <Slider
                  value={22}
                  step={1}
                  maximumValue={24}
                  minimumValue={18}
                  onValueChange={(value) => this.setState({sleep: value})}
              />
              </View>
              <View style={{width:'90%', paddingTop:30}}>
                <Button style={{backgroundColor: '#016565', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#E9ECEB'}} onPress={()=>this.onSubmitPress()}>
                  Submit
                </Button>
              </View>
              </View>
      );
    }
  };
