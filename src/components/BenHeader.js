/* @flow */

import React, { Component } from 'react';

import { GREY_COLOR } from '../config/const';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class BenHeader extends Component {
  render() {
    return (
      <View style={ styles.container}>

        { this.props.children }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:50,borderBottomWidth:0.5,
    borderBottomColor:'rgba(0,0,0,0.1)',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#fff'
  },
});
