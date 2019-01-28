/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {  Icon } from 'native-base';


const LikeButton = (props) => (

  <View style={{
    flexDirection: 'row',
    alignItems: 'center'
  }}>
      <TouchableOpacity  style={{
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
         <Icon style={s.icon} name="heart" />

      </TouchableOpacity>
      { props.children }
  </View>

);

export default LikeButton;

const s = StyleSheet.create({
  txt:{
    fontSize: 16,
    fontFamily: 'Roboto'
  },
  icon:{
    fontSize: 30,

  }
})
