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
    timelineAPI.insertActivities(firebase, '20171023', 'activities/movies/fightClub', 3).then(function(){
      timelineAPI.insertActivities(firebase, '20171023', 'activities/movies/suicideSquad', 8).then(function(){
        
            timelineAPI.returnActivities(firebase, '20171023').then(
              function(snap){
                var category = snap["4"]['category'];
                var span = snap["4"]['span'];
                var objTitle = snap["4"]['title'];
        
                var data = {};
        
               // fightClub: { title: 'Fight Club', category: 'Drama', description: "jeijewrkeewrewrewrewrewrewrwr", rating: "R-18"}
                var i = 0;
                console.log(snap);
                console.log("ewjrkewhrjkewhrlewkgrjewlhrjwelhrlwjer hahahahaha");
                ActivityAPI.lookupActivity(firebase, category, objTitle).then(function(snapshot){
                  console.log(snapshot);
                });
                // while(i < Object.keys(snap).length){
                //   category = snap[i.toString()]['category'];
                //   span = snap[i.toString()]['span'];
                //   objTitle = snap[i.toString()]['title'];
        
                //   ActivityAPI.lookupActivity(firebaseHi, category, objTitle).then(function(snapshot){
                //     var title = snapshot.title;
                //     var description = snapshot.description;
                //     var rating = snapshot.rating;
        
                //     var obj = {};
                //     obj["title"] = title;
                //     obj["category"] = category;
                //     obj["description"] = description;
                //     obj["rating"] = rating;
                //     obj["span"] = span;
        
                //     data[objTitle] = obj;
                //     i++;
        
                //   });
                //} // end of for loop
        
                //console.log(data);
                //}
          }
        );
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

