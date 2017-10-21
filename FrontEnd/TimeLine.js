import React from 'react';
import { StyleSheet, Text, View, Image ,TouchableHighlight} from 'react-native';
import SortableListView from 'react-native-sortable-listview'
import TimeLineStyle from '../StyleSheets/TimeLineStyle';
import {TimeLineAPI, ActivitiesAPI} from '../API/APIs';
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
      
        <TouchableHighlight
          underlayColor={'#eee'}
          style={{
            padding: 25,
            backgroundColor: '#F8F8F8',
            borderBottomWidth: 1,
            borderColor: '#eee',
          }}
          {...this.props.sortHandlers}
        >
          <View style={{flex:1}}>
            {title}
            {desc}
          </View>
          <Text style={{padding: this.props.data.padding}}>{this.props.data.text}</Text>
        </TouchableHighlight>
        
    )
  }
}

class TimeLine extends React.Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <View style={{flexDirection: 'row', height: '100%'}}>
        <View style={{width: '10%'}}>
          <Text > google </Text>
        </View>
        <View style={{width: '90%'}}>
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
      </View>
    )
  }
}
export default TimeLine;

