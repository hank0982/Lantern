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
  hello: { text: '9:30', padding: 2},
  how: { text: '10:00',padding: 2 },
  test: { text: '10:30',padding: 2 },
  this: { text: '11:00',padding: 100 },
  a: { text: '11:30',padding: 2 },
  real: { text: '11:00' ,padding: 2},
  drag: { text: '11:30' ,padding: 2},
  bb: { text: '12:00' ,padding: 2},
  cc: { text: '12:30',padding: 2 },
  ee: { text: '13:00',padding: 2 },
  ss: { text: '13:30',padding: 2 },
  gg: { text: '14:00',padding: 2 },
  asd: { text: '14:30',padding: 2 },
  qwe: { text: '15:00',padding: 2 },
  zxcv: { text: '15:30',padding: 2 },
  asdf: { text: '16:00',padding: 2 },
  qwer: { text: '16:30',padding: 2 },
  fds: { text: '17:00',padding: 2 },
  sda: { text: '17:30',padding: 2 },
  gfsd: { text: '18:00',padding: 2 },

}
const menus = [
    {
       text:'Movies',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#388E3C',
    },
    {
       text:'Games',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#388E3C',
    },
    {
       text:'Music',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#388E3C',
    },
    {
       text:'Television',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#CAAE03',
    },
    {
       text:'Shopping',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#388E3C',
    },
    {
       text:'Magazine',
       textColor:'#FFFFFF',
       backgroundColor:'#CAAE03',
       borderColor:'#388E3C',
    }

];
let order = Object.keys(data) //Array of keys

class ImageCon extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <Image
                style={{ width: 240, height: 50}}
                source={require('../Assets/Pictures/NewLogo.png')}
            />
  }
}
class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      title: 'Movies',
      onOff: '#CAAE03',
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
  render() {
    return (
        <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{width: '10%', backgroundColor: this.state.onOff}}>
        </View>
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{
            width: '90%',
            padding: 25,
            backgroundColor: '#F8F8F8',
            borderBottomWidth: 1,
            borderColor: '#eee',
          }}
          {...this.props.sortHandlers}
        >
        <View style = {{flex:1,width: '100%', flexDirection:'row'}}>
          <Text style = {{width: '70%'}}>{this.props.data.text}</Text>
          <Button onPress={this._showModal} style={{width: '20%', paddingRight: 10,backgroundColor: '#016565', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#E9ECEB'}}> Edit </Button>
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
              data={[1,2,3,4]}
              onPress={item => {}}
              contentRender={item => <ImageCon item = {item} />}
            />
            <View style = {{paddingTop:10}}>
            <Button title = "Close" onPress={this._hideModal} style={{ backgroundColor: '#016565', borderColor: '#000000', borderWidth: 2}} textStyle={{fontSize: 18, color: '#E9ECEB'}}>Close</Button>
            </View>
            </View>
          </Modal>
        </View>
        </View>
    )
  }
}

class TimeLine extends React.Component {
  constructor(){
    super();
    // this.onPressButtonMenu = {};
    // this.showDialog = {};
  }
  componentDidMount(){
    timelineAPI.returnActivities(this.props.screenProps.firebase, '20171023').then(
      function(snap){
        console.log(snap);
      }
    );
  }
  
  render() {
    return (
      <View style={{ height: '100%', width:'100%'}}>

      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
      </View>

    )
  }
}
export default TimeLine;

