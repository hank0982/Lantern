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
                style={{ width: 50, height: 50}}
                source={require('../Assets/Pictures/cathayLOGO.png')}
              />
      }else if(k == 'Flight Club'){
        return  <Image
                onPress={this._showModal}
                style={{ width: 50, height: 50}}
                source={require('../Assets/Movies/fightClub.jpg')}
              />
      }else{
        return  <Image
                onPress={this._showModal}
                style={{ width: 50, height: 50}}
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
  render() {
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
          <Text style = {{width: '40%', fontSize: 30, color: '#016565'}}>{this.props.data.text}</Text>
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
              }); this._hideModal();}}
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
  }
}

class TimeLine extends React.Component {
  constructor(){
    super();
    // this.onPressButtonMenu = {};
    // this.showDialog = {};
  }

  // componentDidMount(){
  //   var firebase = this.props.screenProps.firebase;
  //   timelineAPI.insertActivities(firebase, '20171023', 'activities/movies/suicideSquad', 0).then(function(){
  //     timelineAPI.insertStatic(firebase, '20171023', "food", 4, 1).then(function(){
  //     timelineAPI.insertActivities(firebase, '20171023', 'activities/magazines/emporium0717', 5).then(function(){
  //       timelineAPI.insertActivities(firebase, '20171023', 'activities/music/afterHours', 6).then(function(){
  //         timelineAPI.insertActivities(firebase, '20171023', 'activities/television/gravityFalls', 7).then(function(){
  //         timelineAPI.insertStatic(firebase, '20171023', "sleep", 8, 5).then(function(){
  //         timelineAPI.insertStatic(firebase, '20171023', "food", 13, 1).then(function(){
  //         timelineAPI.insertStatic(firebase, '20171023', "sleep", 14, 5).then(function(){
  //         timelineAPI.insertStatic(firebase, '20171023', "food", 19, 1).then(function(){

  //           timelineAPI.returnActivities(firebase, '20171023').then(function(snap){
  //             var category;
  //             var span;
  //             var objTitle;
  //             var dataa = {};
  //             var len = Object.keys(snap).length;
  //             var i = 0;
  //             function loopfunc(func, i){
  //               i++;
  //               if (i<len){
  //               func(i);
  //               }
  //               else if (i == len){
  //                 console.log(dataa);
  //               } 
  //             }

  //             function a(i){ActivityAPI.lookupActivity(firebase, category, objTitle).then(function(snapshot){
  //                 category = snap[i.toString()]['category'];
  //                 span = snap[i.toString()]['span'];
  //                 objTitle = snap[i.toString()]['title'];
  //                 if (category == "food"){
  //                   dataa["lightOnFood"+i] = {"title": "Light On: Food", "span": "1"};
  //                   console.log("food " + i);
  //                 }
  //                 else if (category == "sleep"){
  //                   dataa["lightOff"+i] = {"title": "Light Off", "span": span.toString()};
  //                   console.log("sleep " + i);
  //                 }
  //                 else{
                  
  //                 var title = snapshot.title;
  //                 var description = snapshot.description;
  //                 var rating = snapshot.rating;
              
  //                 var obj = {};
  //                 obj["title"] = title;
  //                 obj["category"] = category;
  //                 obj["description"] = description;
  //                 obj["rating"] = rating;
  //                 obj["span"] = span;

  //                 dataa[objTitle] = obj;
  //                 console.log(title + " " + i);
  //                 }
  //                 loopfunc(a,i)
  //               });
  //             }
  //             a(0);
  //             //console.log(dataa);
              
  //           // end of for loop
  //           });
  //           });
  //           });
  //           });
  //           });
  //         });
  //         });
  //       });
  //     });
  //   });
  // }

  static navigationOptions = TimeLineStyle.navigationOptions;
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: '100%', width:'100%'}}>

      <SortableListView
        style={{ flex: 1 }}
        data={data}
        order={order}
        onRowMoved={e => {
          order.splice (e.to, 0, order.splice(e.from, 1)[0])
          this.forceUpdate()
        }}
        renderRow={row => <RowComponent data={row} />}
      />
      </View>

    )
  }
}
export default TimeLine;

