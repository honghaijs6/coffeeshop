/* @flow */
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

export default class BenHeader extends Component {
  render() {

    // multi - single
    let type = this.props.type || 'multi' ;
    
    const arr = {
      'multi':'space-between',
      'single':'center',
      'flex-start':'flex-start'
    };
    

    return (
      <View style={[
          styles.container,
          { justifyContent:arr[type] },
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
