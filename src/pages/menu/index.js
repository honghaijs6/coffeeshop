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
import BenStatusBar  from "../../components/BenStatusBar";


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

    this.props.navigation.goBack();

  }

  _whereStateChange(newState){
    this.props.onStateChange(newState);
  }

  _onPressItem(info,shopingCart){


    this.props.navigation.navigate('ProItem',{
      proInfo:info,
      shopingCart:shopingCart
    })



  }

  _onPressOrder(){
    this._whereStateChange({
      onAction:'change_tab',
      toTab:'cart'
    });
  }
  render() {


    const { navigation } = this.props;
    const cateInfo = navigation.getParam('cateInfo', null);
    const shopingCart = navigation.getParam('shopingCart',[]);

    const data = this.state.data[cateInfo.code];



    return(
      <Container>

        <BenStatusBar/>

        <MenuHeader onBackBtnPress={()=>{ this._onBackBtnPress() }} />

        <MenuBody onPressItem={(item)=>{ this._onPressItem(item,shopingCart) }}   data={ data } />

        { shopingCart.length > 0 ? <ButtonOrder onPress={()=>{  this._onPressOrder() }} /> : null }


      </Container>
    )




  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
