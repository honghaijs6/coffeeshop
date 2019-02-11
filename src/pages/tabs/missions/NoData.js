/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Icon } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR } from '../../../config/const' ;

export default class NoData extends Component {
  render() {
    return (
      <View style={{
        alignItems:'center',
        marginTop:30,
        marginBottom:30
      }}>
        <View style={{
          width:120,
          height:120,
          borderRadius:60,
          borderWidth:0.5,
          borderColor:'rgba(0,0,0,0.1)',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'rgba(255,255,255,0.3)'
        }}>
          <Icon style={{ fontSize:60, color:COFFEE_COLOR }} name="aperture" />
        </View>
        <Text style={{
          marginTop:20,
          textAlign: 'center',
          fontFamily:'Roboto'
        }}>
          You have no missions yet, please update your information for getting missions
        </Text>
      </View>
    );
  }
}
