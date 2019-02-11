/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class CardContent extends Component {
  render() {
    return (
      <View>
        <Text style={{
          padding:10,
          fontFamily:'Roboto',
          fontSize:16,
          color:'#333'
        }}>
          I have Got a cat, her name is matinda. She is a quite old for a cat
          She is eleven years olds. matilda is very fluffy, her back is black, and her belly, chest are white
        </Text>
      </View>
    );
  }
}
