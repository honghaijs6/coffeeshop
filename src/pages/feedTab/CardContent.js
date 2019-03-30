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
          { this.props.children }
        </Text>
      </View>
    );
  }
}
