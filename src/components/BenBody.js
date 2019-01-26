/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BenBody = (props) => (
  <View style={{
    alignItems:'center',
    paddingTop:10,
    paddingBottom:20
  }}>

      <View style={{
          width: '95%'
        }}>

          { props.children }


      </View>

  </View>
);

export default BenBody;
