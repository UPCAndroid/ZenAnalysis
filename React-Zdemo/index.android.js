/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainView from './js/MainView';
export default class Zdemo extends Component {
  render() {
    return (
      <MainView></MainView>
    );
  }
}

AppRegistry.registerComponent('Zdemo', () => Zdemo);
