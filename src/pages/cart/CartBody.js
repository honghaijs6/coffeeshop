/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, RED_COLOR, BLACK_COLOR } from '../../config/const' ;

import CartItem from './CartItem';
//import console = require('console');


export default class  CartBody extends Component{

  constructor(props){
    super(props);

    this.state = {
      userInfo:props.userInfo
    }

  }

  calculateBill(data,discount=0){

    let total = 0
    data.map((item)=>{
       total += item.amount * item.price
    });

    return parseFloat(total - discount).toFixed(2);

  }

  calculateCoupon(json){
    let discount = 0 ;

    if(JSON.stringify(json)!=='{}'){
      const total = this.calculateBill(this.props.data) ;
      discount = (total * json.value)/100;
    }

    return parseFloat(discount).toFixed(2) ;


  }

  render(){

    const styleDisPlayCoupon = this.props.coupon.code !== undefined ? 'display' : 'none';
    const discount = this.calculateCoupon(this.props.coupon);

    return(
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
              <TextInput onChangeText={(text)=>{ this.props.onChangeText({name:text}) }} placeholder="Your name" value={ this.props.userInfo.name } style={s.input}  />

            </View>

            <View style={ s.row }>

              <Icon style={s.icon} name="call" />
              <TextInput keyboardType = "number-pad" onChangeText={(text)=>{ this.props.onChangeText({phone:text}) }}  placeholder="Your phone number" value={ this.props.userInfo.phone } style={s.input}  />

            </View>

            <View style={ s.row }>

              <Icon style={s.icon} name="pin" />
              <TouchableOpacity
                onPress={()=>{ this.props.onPressGotoSettingAdd() }}
                style={{
                  width: '90%'
                }}>
                <Text> { this.state.userInfo.recent_address || 'add your delivery address' } </Text>
              </TouchableOpacity>

            </View>

          </View>

          {/* BLOCK 2 */}
          <View style={{margin: 10}}>
            <Text style={{ fontFamily: 'Roboto'}}> Your Orders detail </Text>
          </View>

          <View style={s.block}>

              {
                this.props.data.map((item,index)=>{
                  return(
                    <CartItem key={index} onItemSelect={(data)=>{ this.props.onItemSelect(data) }} data={item} />
                  )
                })
              }

              { /* COUPON HERE  */}
              <View style={{
                padding: 0,
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                display: styleDisPlayCoupon
              }}>
                  <View style={{ flexDirection:'row', alignItems:'center'}}>
                      <Icon name="pricetag" style={{marginRight: 10, fontSize:16, color:COFFEE_COLOR}} />
                      <Text style={{fontFamily:'Roboto', fontSize:16, color:COFFEE_COLOR}}> code : { this.props.coupon.code }   </Text>

                  </View>
                  <View>
                    <Text> { discount } $ </Text>
                  </View>
              </View>
              { /* END COUPON */}
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
                  <Text style={[s.txt, {fontSize: 20, color: COFFEE_COLOR}]}> { this.calculateBill(this.props.data, discount ) } $ </Text>
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

                <TouchableOpacity
                  onPress={()=>{ this.props.onPressGotoCouponPage() }}
                  style={{
                    borderWidth:0.5,
                    padding:5,
                    borderColor:COFFEE_COLOR,
                    borderRadius:18,
                    backgroundColor:COFFEE_COLOR,
                    display: this.props.coupon.code !== undefined ? 'none':'display'
                }}>
                  <Text style={{color:'#fff'}}> Get Coupon </Text>
                </TouchableOpacity>

              </View>

          </View>
      </View>
    )
  }
}

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
