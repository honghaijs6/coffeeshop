/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { Container,  Content } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR } from '../../config/const' ;

import products from '../../data/products.json';

import MenuHeader from './header';
import MenuBody from './body'

function ButtonOrder (props){

  return(
    <TouchableOpacity onPress={ ()=> { props.onPress() } } style={{
        height: 55,
        backgroundColor: COFFEE_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ fontFamily: 'Roboto', fontSize: 18, color:'#fff'}}> Order Now  </Text>
    </TouchableOpacity>
  )
}

export default class Menu extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'menu',

      category:'milktea',
      data:products // data info recievr from order page

    }
  }


  _onBackBtnPress(){
    this._whereStateChange({
      onAction:'change_tab',
      toTab:'order'
    })
  }

  _whereStateChange(newState){
    this.props.onStateChange(newState);
  }

  _onPressItem(data){


    this._whereStateChange({
      onAction:'change_tab',
      toTab:'productitem',
      proInfo:data,
    });

  }

  _onPressOrder(){
    this._whereStateChange({
      onAction:'change_tab',
      toTab:'cart'
    });
  }
  render() {



    if(this.props.onTab === this.state.tab){

      const data = this.state.data[this.props.data.code];

      return(
        <Container style={{
          backgroundColor:GREY_COLOR,
        }}>

          <MenuHeader onBackBtnPress={()=>{ this._onBackBtnPress() }} />

          <MenuBody onPressItem={(item)=>{ this._onPressItem(item) }}  data={ data } />

          { this.props.shopingCart.length > 0 ? <ButtonOrder onPress={()=>{  this._onPressOrder() }} /> : null }



        </Container>
      )
    }

    return (
      <View></View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
