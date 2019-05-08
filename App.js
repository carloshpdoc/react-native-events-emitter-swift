/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet,
  Text,
  View, 
  NativeEventEmitter, 
  NativeModules
} from 'react-native';
// import { remove } from 'jest-util/build/preRunMessage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { Counter } = NativeModules;


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    const CounterEvents = new NativeEventEmitter(NativeModules.Counter)
    CounterEvents.addListener(
      "onIncrement",
      res => console.log("onIncrement event", res)
    )
    console.log('aaaaahhhh');
    console.log(Counter.increment());
    
    Counter.getCount(value => {
      console.log("count is " + value)
    })

    // subscribe to event

    // function decrement() {
    //   NativeModules.Counter.decrement()
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e.message, e.code))
    // }

    
    // async function decrement() {
    //   try {
    //     const res = await Counter.decrement()
    //     console.log(res)
    //   } catch(e) {
    //     console.log(e.message, e.code)
    //   }
    // }

    // decrement()
    // decrement()
  }

  // componentWillUnmount(){
  //   remove.subscription();
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
