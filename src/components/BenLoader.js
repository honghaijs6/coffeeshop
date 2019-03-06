/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator

} from 'react-native';

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
        backgroundColor: 'rgba(255,255,255,0.6)',
      }}>
          <ActivityIndicator color="#000" size="large" />
      </View>

    </View>
  )
}

export default BenLoader;
