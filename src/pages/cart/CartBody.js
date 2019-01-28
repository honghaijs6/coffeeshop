/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import { Icon } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, RED_COLOR, BLACK_COLOR } from '../../config/const' ;

import CartItem from './CartItem';


const CartBody = ({}) => (
  <View>
      <View style={{margin: 10}}>
        <Text style={{ fontFamily: 'Roboto'}}> Delivery infomation </Text>
      </View>

      <View style={{
        padding: 10,
        backgroundColor: '#fff'
      }}>

        {/*ROW*/}
        <View style={ s.row }>

          <Icon style={s.icon} name="contact" />
          <TextInput placeholder="Your name" value="Benjamin HD" style={s.input}  />

        </View>

        <View style={ s.row }>

          <Icon style={s.icon} name="call" />
          <TextInput placeholder="Your phone number" value="0916396260" style={s.input}  />

        </View>

        <View style={ s.row }>

          <Icon style={s.icon} name="pin" />
          <TextInput  placeholder="Delivery address" style={s.input}  />

        </View>

      </View>

      {/* BLOCK 2 */}
      <View style={{margin: 10}}>
        <Text style={{ fontFamily: 'Roboto'}}> Your Orders detail </Text>
      </View>

      <View style={s.block}>

          <CartItem data={{name:"Black Milk tea", amount:1, price:12 }} />
          <CartItem data={{name:"Green Milk tea", amount:2, price:12 }} />

          {/* TOTAL */}
          <View style={{
            padding: 0,
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>

            <View>
              <Text style={s.txt}> Total </Text>
            </View>

            <View>
              <Text style={[s.txt, {fontSize: 20, color: COFFEE_COLOR}]}> 11 $ </Text>
            </View>

          </View>

          {/* visa master cart */}
          <View style={{
            paddingVertical: 10,
            borderTopColor: 'rgba(0,0,0,0.2)',
            borderTopWidth: 0.5,
            padding: 0,
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>

            <View style={{flexDirection: 'row'}}>
              <Icon name="card" style={{fontSize: 20, color:COFFEE_COLOR, marginRight: 10, marginLeft: 5}} />
              <Text style={s.txt}> Visa/Master/JCB </Text>
            </View>

            <View>
              <Text>Setup </Text>
            </View>

          </View>

      </View>
  </View>
);

export default CartBody;


const s = StyleSheet.create({

  txt:{
    fontFamily: 'Roboto',
    fontSize: 14
  },
  block:{
    padding: 10,
    backgroundColor: '#fff'
  },
  row:{
    flexDirection: 'row',
    marginVertical: 10
  },
  input:{
    width: '80%',
    fontSize: 16,
    fontFamily: 'Roboto'
  },
  icon:{
    fontSize:26,
    color: COFFEE_COLOR,
    marginHorizontal: 15
  }
});
