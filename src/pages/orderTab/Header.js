
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';

import {  Icon,  Content,  } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, BLACK_COLOR } from '../../config/const' ;

import BenHeader from '../../components/BenHeader';



export default class OrderHeader extends Component{


  constructor(props){
  
    super(props);


  }
  truncate = (text)=>{
      return text.length > 32 ? `${text.substr(0, 32)}...` : text;
  }
  render(){

    let address = this.props.userInfo.recent_address ;
    //address = this.truncate(address);

    return(
      <View>
          <BenHeader>
              <TouchableOpacity onPress={ ()=>{ this.props.onPressNavigate('DeliveryPage') } }  style={{ flexDirection: 'row', paddingLeft: 10}}>

                  <Icon style={{ fontSize: 32, color: COFFEE_COLOR}} name="bicycle"></Icon>
                  <View style={{ paddingHorizontal: 10, width: '90%'}}>
                      <Text style={{ fontSize: 10, color: BLACK_COLOR}}><Icon style={{fontSize: 12, color: BLACK_COLOR}} name="pin" /> Delivery to </Text>
                      
                      <View style={{
                        flexDirection:'row'
                      }}>
                        <TextInput editable={false} selectTextOnFocus={false} style={{
                          width:'105%',
                          fontFamily:'Roboto',
                          fontSize:16,
                          color:BLACK_COLOR
                        }} defaultValue={ address } />

                      </View>
                      
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
                onPress={ ()=>{ this.props.onPressNavigate('CouponPage') } }
                style={ s.btn }
              >
                <Icon style={{ fontSize: 20, color: COFFEE_COLOR}} name="pizza"></Icon>
                <View style={{ paddingHorizontal: 10}}>
                    <Text style={{ fontSize: 10, color: BLACK_COLOR}}> Promotions </Text>
                    <Text style={{ fontSize: 15, color:BLACK_COLOR}}> Type Your Coupon  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ this.props.onPressNavigate('DeliveryPage') }} style={ [ s.btn,{ borderRightWidth: 0} ] } >

                <Icon style={{ fontSize: 20, color: COFFEE_COLOR}} name="pin"></Icon>
                <View style={{ paddingHorizontal: 10}}>
                    <Text style={{ fontSize: 10, color: BLACK_COLOR}}> Set address </Text>
                    <Text style={{ fontSize: 15, color:BLACK_COLOR}}> Delivery </Text>
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
