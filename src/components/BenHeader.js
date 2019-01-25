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

    // multi - single
    let type = this.props.type || 'multi' ;
    type = type === 'multi' ? 'space-between' : 'center';



    return (
      <View style={[
          styles.container,
          { justifyContent:type },
        ]}>

        { this.props.children }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:55,borderBottomWidth:0.5,
    borderBottomColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    backgroundColor:'#fff'
  },
});
