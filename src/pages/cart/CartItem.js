/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {BLACK_COLOR}  from '../../config/const';


const CartItem = (props) => (
  <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)'}}>
      <View style={ [s.row,{ justifyContent: 'space-between'}] }>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
            <View style={{
              borderWidth: 0.5,
              borderColor: BLACK_COLOR,
              justifyContent: 'center',
              width: 30, height: 30,
              alignItems: 'center'
            }}>
              <Text> {  props.data.amount } </Text>
            </View>

            <View style={{marginLeft: 10}}>
              <Text> { props.data.name } </Text>
            </View>
        </View>

        <View style={{alignItems: 'center', height: 30}}>
            <Text> { props.data.price } $ </Text>
        </View>

      </View>
  </View>
);

export default CartItem;

const s = StyleSheet.create({
  row:{
    flexDirection: 'row',
    marginVertical: 10
  },
})
