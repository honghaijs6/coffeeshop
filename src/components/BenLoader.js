/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator

} from 'react-native';

import { Icon } from 'native-base';


const BenLoader = function(props){

  let isDisplay = props.visible ? 'block':'none';   



  return(
    <View style={{
      position: 'absolute',
      zIndex: 1,
      display: isDisplay,
      left: 0,
      right:0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View style={{
        width: 100,
        height: 100,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(59,133,63,0.81)',
      }}>
          <ActivityIndicator color="#fff" size="large" />
          <Text style={{
            color:'#fff',
            fontFamily:'Roboto',
            fontSize:11
          }}><Icon style={{color:'#fff', fontSize:12, marginRight: 10,}} name="cafe" /> King Kong </Text>
      </View>

    </View>
  )
}

export default BenLoader;
