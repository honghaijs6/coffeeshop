
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import {  Icon,  Content,  } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, BLACK_COLOR } from '../../config/const' ;

import BenHeader from '../../components/BenHeader';

export default class OrderHeader extends Component{


  truncate = (text)=>{
      return text.length > 32 ? `${text.substr(0, 32)}...` : text;
  }
  render(){

    let address = "2055 Beaver Ruin Rd Suite B Norcross, GA 30071";
    address = this.truncate(address);

    return(
      <View>
          <BenHeader>
              <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 10}}>
                  <Icon style={{ fontSize: 32, color: COFFEE_COLOR}} name="bicycle"></Icon>
                  <View style={{ paddingHorizontal: 10, width: '90%'}}>
                      <Text style={{ fontSize: 10, color: BLACK_COLOR}}><Icon style={{fontSize: 12, color: BLACK_COLOR}} name="pin" /> Delivery to </Text>


                      <Text style={{ fontSize: 18, color:BLACK_COLOR}}>
                           { address }
                      </Text>
                  </View>
              </TouchableOpacity>
          </BenHeader>

          <View style={{
            flexDirection: 'row',
            height: 55,
            borderBottomWidth: 0.5,
            backgroundColor: GREY_COLOR,
            borderBottomColor: 'rgba(0,0,0,0.2)'
          }}>
              <TouchableOpacity
                style={ s.btn }
              >
                <Icon style={{ fontSize: 20, color: COFFEE_COLOR}} name="pizza"></Icon>
                <View style={{ paddingHorizontal: 10}}>
                    <Text style={{ fontSize: 10, color: BLACK_COLOR}}> Promotions </Text>
                    <Text style={{ fontSize: 15, color:BLACK_COLOR}}> Type Your Coupon  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={ [ s.btn,{ borderRightWidth: 0} ] } >
                <Icon style={{ fontSize: 20, color: COFFEE_COLOR}} name="time"></Icon>
                <View style={{ paddingHorizontal: 10}}>
                    <Text style={{ fontSize: 10, color: BLACK_COLOR}}> Set time </Text>
                    <Text style={{ fontSize: 15, color:BLACK_COLOR}}> Deliver </Text>
                </View>
              </TouchableOpacity>


          </View>

      </View>
    )
  }
}

const s = StyleSheet.create({
  btn:{
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    borderRightWidth: 0.5,
    borderRightColor: 'rgba(0,0,0,0.2)'
  }
})
