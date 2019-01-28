/* @flow */

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Container,  Content, Icon,  } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR, RED_COLOR, BLACK_COLOR } from '../../config/const' ;


import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';


import CartBody from './CartBody';




export default class Cart extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'cart',


      data: this.props.shopingCart ,

      userInfo:props.userInfo
    }

    this._onOrderNow = this._onOrderNow.bind(this);
  }

  _onChangeText(json){

    this.setState(Object.assign(this.state.userInfo,json));


  }
  _onOrderNow(){

    let msg = '';
    if(this.state.userInfo.phone.length < 6 ){
      msg = 'Please enter your phone number ';
    }else if(this.state.userInfo.recent_address.length < 20){
      msg = 'Please enter your delivery address '
    }else{

      this.props.onStateChange({
        onAction:'change_tab',
        toTab:'checkout'
      })
    }

    msg !== '' ? alert(msg) : null

  }
  _onBackBtnPress(){
    this.props.onStateChange({
      onAction:'change_tab',
      toTab:'order'
    })
  }
  render() {

    if(this.props.onTab === this.state.tab){

      return (
        <Container style={{
          backgroundColor:GREY_COLOR,
          display:  this.props.onTab === this.state.tab ? 'block':'none'
        }}>
          <BenHeader>
            <BackButton onPress={()=>{ this._onBackBtnPress() }} />
            <View>
              <Text style={{
                fontSize: 16, fontFamily: 'Roboto'
              }}> Your Orders Cart </Text>
            </View>

            <Text>  </Text>
          </BenHeader>

          <View style={{
            flex: 1,
            justifyContent: 'space-between'
          }}>

              <Content>
                <CartBody onChangeText={ (data)=>{ this._onChangeText(data) } } data={this.state.data} userInfo={ this.props.userInfo } />
              </Content>

              {/* FOOTER BUTTON */}
              <TouchableOpacity onPress={ this._onOrderNow } style={{
                height: 50,
                backgroundColor: COFFEE_COLOR,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={[s.txt, {color: '#fff', fontFamily: 'Roboto', fontSize: 16}]}> Order Now </Text>


              </TouchableOpacity>

          </View>

        </Container>
      );

    }

    return(
      <View></View>
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
