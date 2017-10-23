import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableHighlight,TouchableOpacity} from 'react-native';
import SortableListView from 'react-native-sortable-listview'
import { StackNavigator } from 'react-navigation';
import TimeLineStyle from '../StyleSheets/TimeLineStyle';
import {timelineAPI, ActivityAPI, LoginAPI} from '../API/APIs';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
import Modal from 'react-native-modal'
import Button from 'apsl-react-native-button';
import CarouselCard from 'react-native-card-carousel'

var modal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',

  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
let data = {
  hello: { text: '9:30', padding: 1, onOff:1},
  how: { text: '10:00',padding: 1, onOff:1 },
  test: { text: '10:30',padding: 1, onOff:1 },
  this: { text: '11:00',padding: 1 , onOff:1},
  a: { text: '11:30',padding: 1 , onOff:3},
  real: { text: '12:00' ,padding: 1, onOff:1},
  drag: { text: '12:30' ,padding: 1, onOff:1},
  bb: { text: '13:00' ,padding: 1, onOff:1},
  cc: { text: '13:30',padding: 1 , onOff:0},
  ee: { text: '14:00',padding: 1 , onOff:0},
  ss: { text: '14:30',padding: 1 , onOff:0},
  gg: { text: '15:00',padding: 1 , onOff:0},
  asd: { text: '15:30',padding: 1 , onOff:0},
  qwe: { text: '16:00',padding: 1 , onOff:3},
  zxcv: { text: '16:30',padding: 1, onOff:0 },
  asdf: { text: '17:00',padding: 1, onOff:0 },
  qwer: { text: '17:30',padding: 1, onOff:0},
  fds: { text: '18:00',padding: 1 ,onOff:0},
  sda: { text: '18:30',padding: 1 ,onOff:0},
  gfsd: { text: '19:00',padding: 1,onOff:3},

}
const menus = [
    {
       text:'Movies',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    },
    {
       text:'Games',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    },
    {
       text:'Music',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    },
    {
       text:'Television',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    },
    {
       text:'Shopping',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    },
    {
       text:'Magazine',
       textColor:'#FFFFFF',
       backgroundColor:'#016565',
       borderColor:'#000000',
    }

];
let order = Object.keys(data) //Array of keys



class ImageCon extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    if(this.props.cata == 'Movies'){
      if(this.props.item == 'Flight Club'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Movies/fightClub.jpg')}
              />
      }else if (this.props.item  == 'discovery0917'){
        return <Image
                    style={{ width: 240, height: 250}}
                    source={require('../Assets/Movies/suicideSquad.jpg')}
                />
      }
    }else if(this.props.cata == 'Music'){
      if(this.props.item  == 'discovery0917'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Music/AMW.jpg')}
              />
      }else if (this.props.item  == 'Flight Club'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Music/jazz.jpg')}
              />
      }
      }else if(this.props.cata == 'Games'){
      if(this.props.item  == 'discovery0917'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Games/hangman.jpg')}
              />
      }else if (this.props.item % 2 == 'Flight Club'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Games/tetrisBattle.jpg')}
              />
    }
    }else if(this.props.cata == 'Television'){
      if(this.props.item  == 'discovery0917'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/TV/gravityFalls.jpg')}
              />
      }else if (this.props.item  == 'Flight Club'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/TV/obit.jpg')}
              />
    }
    }else if(this.props.cata == 'Magazine'){
      if(this.props.item  == 'discovery0917'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Magazines/discovery0917.jpg')}
              />
      }else if (this.props.item  == 'Flight Club'){
        return <Image
                style={{ width: 240, height: 250}}
                source={require('../Assets/Magazines/emporium0717.jpg')}
              />
    }
    }
}}
class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      title: 'Movies',
      name: 'Not Yet Decided'
    }
  }
  onPressButtonMenu(menu) {
    this.setState({
      title: menu.text
    })
  }
  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })
  _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    returnIcon(k){
      if(k == 'Not Yet Decided'){
        return <Image
                onPress={this._showModal}
                style={{ width: 70, height: 70}}
                source={require('../Assets/Pictures/cathayLOGO.png')}
              />
      }else if(k == 'Flight Club'){
        return  <Image
                onPress={this._showModal}
                style={{ width: 70, height: 70}}
                source={require('../Assets/Movies/fightClub.jpg')}
              />
      }else{
        return  <Image
                onPress={this._showModal}
                style={{ width: 70, height: 70}}
                source={require('../Assets/Magazines/discovery0917.jpg')}
              />
      }
    }
  returnColor(onOff){
    return (onOff == 3)? '#ffe66d': (onOff == 1) ? '#ffe66d' : '#000000'
  }
  renderSleeporButton(onOff){
    return (onOff == 3) ? <Text style = {{width: '40%', fontSize: 30, color: '#016565'}}>Eating</Text> :(onOff == 1) ? <Button style = {{backgroundColor: '#E9ECEB',
    borderColor: '#E9ECEB',padding: 10,width: '30%'}} onPress={this._showModal}>
          <View style = {{padding: 10,width: '30%'}}>
          {this.returnIcon(this.state.name)}
          </View>
          </Button> : <Text style = {{width: '40%', fontSize: 30, color: '#016565'}}>Sleeping Time</Text>;
  }
  fightClub(name){
      
      this.props.func(name);
  }
  render() {
    if(this.props.data.padding > 0){

    return (
        <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{width: '10%', backgroundColor: this.returnColor(this.props.data.onOff)}}>
        </View>
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{
            width: '90%',
            padding: 25,
            backgroundColor: '#E9ECEB',
            borderBottomWidth: 1,
            borderColor: '#eee',
            paddingBottom: (this.props.data.padding*20).toString()+'%',
          }}
          {...this.props.sortHandlers}
        >
        <View style = {{flex:1,width: '100%', flexDirection:'row'}}>
          <Text style = {{width: '33%', fontSize: 30, color: '#016565'}}>{this.props.data.text}</Text>
          <Text style = {{width: '25%', fontSize: 14, color: '#016565'}}>{((this.props.data.onOff == 0) ? 'Light Off' : 'Light On')}</Text>

          {this.renderSleeporButton(this.props.data.onOff)}
        </View>
        </TouchableHighlight>
        <View style = {modal.container}>
          <Modal isVisible={this.state.isModalVisible} >
          <View style={modal.modalContent}>
          <View style = {{height:'10%'}}>
              <ScrollingButtonMenu 
              items={menus}
              style={{padding:2}}
              onPress={this.onPressButtonMenu.bind(this)}
            /></View>
            
            <Text> {this.state.title} </Text>   
            <CarouselCard
              height={250}
              autoplay
              interval={4000}
              data={['Flight Club','discovery0917']}
              onPress={item => {this.setState({
                name: item
              }); this._hideModal(); this.fightClub(item)}}
              contentRender={item => <ImageCon item = {item} cata = {this.state.title}/>}
            />
            <View style = {{paddingTop:10}}>
            <Button title = "Close" onPress={this._hideModal} style={{ backgroundColor: '#016565', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#E9ECEB'}}>Close</Button>
            </View>
            </View>
          </Modal>
        </View>
        </View>
    )
  }else{
    return null
  }
  }
}

class TimeLine extends React.Component {
  constructor(){
    super();
    // this.onPressButtonMenu = {};
    // this.showDialog = {};
    this.state = {
      flex: 1,
      height: '100%'
    }
  }

  fakeRender(a){
    if(a == 'Flight Club'){
      data.how.padding = 0;
      data.test.padding = 0;
      data.this.padding = 0;
      data.hello.padding = 4;
    
    }else{
      data.drag.padding = 0;
      data.real.padding = 2;
    }
    this.setState({height: '100%'});
  }
  static navigationOptions = TimeLineStyle.navigationOptions;
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: this.state.height, width:'100%'}}>

      <SortableListView
        style={{ flex: this.state.flex }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice (e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} func = {(a)=>this.fakeRender(a)}/>}
      />
      </View>

    )
  }
}
export default TimeLine;

