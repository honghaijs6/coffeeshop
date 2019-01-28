/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

import { GREY_COLOR, COFFEE_COLOR, RED_COLOR } from '../../config/const' ;


const BodyItem = (props) => (
  <View>
      <View style={{
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.2)'
      }}>
         <Image style={{height: 300,width: null}} source={{uri:"https://static.vietnammm.com/images/restaurants/vn/NQ01R1R/products/mon-sua-tuoi-tran-chau-duong-den.png"}} />

         <View style={{
           backgroundColor: '#fff',
           padding: 10,
         }}>

           <Text style={s.h4}> Black Milk Tea </Text>
           <Text style={s.txt}> Tea Description </Text>

         </View>
      </View>

      <View>
        <Text style={{paddingHorizontal: 10, marginTop: 15, fontSize: 18, fontFamily: 'Roboto'}}> Note </Text>

        <View style={{
            backgroundColor: '#fff',
            marginTop: 5,
            padding: 5,
            borderTopWidth: 0.5,
            borderTopColor: 'rgba(0,0,0,0.2)',
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgba(0,0,0,0.2)',

          }}>

          <TextInput style={{padding: 10, fontSize: 16}} placeholder="Take a note  " />
        </View>

      </View>
  </View>
);

export default BodyItem;

const s = StyleSheet.create({
  txt:{
    fontFamily: 'Roboto',
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COFFEE_COLOR
  },
});
