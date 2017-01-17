/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component ,PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
    AlertIOS,
} from 'react-native';
import ReactDOM, {render} from 'react-dom';
// import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

export default class APPdemo1 extends Component {
  render() {
    return (
      <View style={styles.container}>
    {/*当文本被点击以后调用此回调函数*/}
  <Text style={{flex:0, color:'red', fontSize:15,fontStyle:'italic',textAlign:'left',textShadowColor:'yellow',textShadowOffset:{width:10,height:10}}}
    onPress={() => AlertIOS.prompt('Plain Text Entry','请输入文字',[{text: '确定', onPress: () => console.log('Foo Pressed!')},
    {text: '取消', onPress: () => console.log('Bar Pressed!')},{text: '重置', onPress: () => console.log('Bar Pressed!')},])}
   // onLongPress={alert('长按了')} //{/*当文本被长按以后调用此回调函数*/}
  >
    Welcome to React Native!
    </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
    </Text>
        <Text style={styles.instructions}
      onPress={AlertIOS.alert(
          '温馨提示',
          '今天是个好日子',
          [
            {text: '确定', onPress: () => console.log('Foo Pressed!')},
            {text: '取消', onPress: () => console.log('Bar Pressed!')},
          ]
  )}
  >
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View>
    <Text>
    今天是个好日子
    </Text>
          <Image
              style={styles.logo}
              source={{uri: 'http://pic2.cxtuku.com/00/02/31/b945758fd74d.jpg'}}
          />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo:{
    height:42,
    width:42,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('APPdemo1', () => APPdemo1);
