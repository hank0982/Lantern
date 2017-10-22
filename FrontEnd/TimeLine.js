import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableHighlight} from 'react-native';
import SortableListView from 'react-native-sortable-listview'
import { StackNavigator } from 'react-navigation';

import TimeLineStyle from '../StyleSheets/TimeLineStyle';
import {timelineAPI, ActivityAPI, LoginAPI} from '../API/APIs';
let data = {
  hello: { text: 'world', padding: 2},
  how: { text: 'are you',padding: 2 },
  test: { text: 123,padding: 2 },
  this: { text: 'is',padding: 100 },
  a: { text: 'a',padding: 2 },
  real: { text: 'real' ,padding: 2},
  drag: { text: 'drag and drop' ,padding: 2},
  bb: { text: 'bb' ,padding: 2},
  cc: { text: 'cc',padding: 2 },
  dd: { text: 'dd',padding: 2 },
  ee: { text: 'ee' ,padding: 2},
  ff: { text: 'ff' ,padding: 2},
  gg: { text: 'gg' ,padding: 2},
  hh: { text: 'hh',padding: 2 },
  ii: { text: 'ii',padding: 2 },
  jj: { text: 'jj',padding: 2 },
  kk: { text: 'kk' ,padding: 2},
}

let order = Object.keys(data) //Array of keys

class RowComponent extends React.Component {
  render() {
    return (
        <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{width: '10%'}}>
          <Text> hi </Text>
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
        <View >
          <Text style={{padding: this.props.data.padding}}>{this.props.data.text}</Text>
        </View>
        </TouchableHighlight>
        </View>
    )
  }
}

class TimeLine extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    var firebase = this.props.screenProps.firebase;
    timelineAPI.insertActivities(firebase, '20171023', 'activities/movies/suicideSquad', 0).then(function(){
      timelineAPI.insertStatic(firebase, '20171023', "food", 4, 1).then(function(){
      timelineAPI.insertActivities(firebase, '20171023', 'activities/magazines/emporium0717', 5).then(function(){
        timelineAPI.insertActivities(firebase, '20171023', 'activities/music/afterHours', 6).then(function(){
          timelineAPI.insertActivities(firebase, '20171023', 'activities/television/gravityFalls', 7).then(function(){
          timelineAPI.insertStatic(firebase, '20171023', "sleep", 8, 5).then(function(){
          timelineAPI.insertStatic(firebase, '20171023', "food", 13, 1).then(function(){
          timelineAPI.insertStatic(firebase, '20171023', "sleep", 14, 5).then(function(){
          timelineAPI.insertStatic(firebase, '20171023', "food", 19, 1).then(function(){

            timelineAPI.returnActivities(firebase, '20171023').then(function(snap){
              var category;
              var span;
              var objTitle;
              var dataa = {};
              var len = Object.keys(snap).length;
              var i = 0;
              function loopfunc(func, i){
                i++;
                if (i<len){
                func(i);
                }
                else if (i == len){
                  console.log(dataa);
                } 
              }

              function a(i){ActivityAPI.lookupActivity(firebase, category, objTitle).then(function(snapshot){
                  category = snap[i.toString()]['category'];
                  span = snap[i.toString()]['span'];
                  objTitle = snap[i.toString()]['title'];
                  if (category == "food"){
                    dataa["lightOnFood"+i] = {"title": "Light On: Food", "span": "1"};
                    console.log("food " + i);
                  }
                  else if (category == "sleep"){
                    dataa["lightOff"+i] = {"title": "Light Off", "span": span.toString()};
                    console.log("sleep " + i);
                  }
                  else{
                  
                  var title = snapshot.title;
                  var description = snapshot.description;
                  var rating = snapshot.rating;
              
                  var obj = {};
                  obj["title"] = title;
                  obj["category"] = category;
                  obj["description"] = description;
                  obj["rating"] = rating;
                  obj["span"] = span;

                  dataa[objTitle] = obj;
                  console.log(title + " " + i);
                  }
                  loopfunc(a,i)
                });
              }
              a(0);
              //console.log(dataa);
              
            // end of for loop
            });
            });
            });
            });
            });
          });
          });
        });
      });
    });
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

