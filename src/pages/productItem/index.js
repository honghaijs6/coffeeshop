/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container,  Content, Icon } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR, RED_COLOR } from '../../config/const' ;

import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import LikeButton from '../../components/LikeButton';

import BodyItem from './body';


export default class ProductItem extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'productitem',

      amount:1,

      info:{ "id":2,"code":"jasmin","name":"Jasmin Milk Tea","photo":"https://sc01.alicdn.com/kf/HTB18OpVFVXXXXbSXXXXq6xXFXXXY/200250275/HTB18OpVFVXXXXbSXXXXq6xXFXXXY.jpg","price":"14" },

    }

    this._onBackBtnPress = this._onBackBtnPress.bind(this);
    this._onInCrease = this._onInCrease.bind(this);
    this._onDeCrease = this._onDeCrease.bind(this);
    this._onBtnOrder = this._onBtnOrder.bind(this);

  }

  _onInCrease(){


    this.setState({
      amount: this.state.amount +=1
    });

  }

  _onDeCrease(){

    let amount = this.state.amount;
    amount = amount > 0 ? amount -1  : 0 ;

    this.setState({
      amount: amount
    });


  }

  _onBackBtnPress(){

    this.goBack();
  }

  goBack(){
    this.props.onStateChange({
      onAction:'change_tab',
      toTab:'menu'
    })
  }

  _onBtnOrder(){
    if(this.state.amount>0){

      const cart = this.state.info;
      cart.amount = this.state.amount;

      this.props.shopingCart.push(cart);

      this.goBack();


    }
  }
  render() {


    if(this.props.onTab === this.state.tab){

      this.state.info = this.props.proInfo ;

      const total = this.state.amount * this.state.info.price ;
      return (
        <Container style={{ backgroundColor:GREY_COLOR }}>

          <BenHeader>
            <BackButton onPress={ this._onBackBtnPress } />

            <LikeButton />

          </BenHeader>

          <View style={{
            flex:1,
            justifyContent: 'space-between'
          }}>

              <Content>
                  <BodyItem info={this.state.info} />

              </Content>


              {/* FOOTER */}
              <View style={s.footerBar}>

                {/* LFET SIDE */}
                <View>
                    <View style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10
                    }}>
                        <TouchableOpacity onPress={ this._onDeCrease } style={{
                          borderRadius: 16,
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 32, width: 32,
                          borderWidth: 0.5,
                          borderColor: RED_COLOR

                        }}>
                          <Icon style={{color: RED_COLOR}} name="remove" />

                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center',
                        alignItems: 'center',height: 32, width: 41, }}>
                          <Text style={{fontSize: 18, fontWeight: 'bold'}}> { this.state.amount } </Text>
                        </View>

                        <TouchableOpacity onPress={ this._onInCrease } style={{
                          borderRadius: 16,
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 32, width: 32,
                          borderWidth: 0.5,
                          borderColor:COFFEE_COLOR,
                          backgroundColor: COFFEE_COLOR

                        }}>
                          <Icon style={{color: '#fff'}} name="add" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={ this._onBtnOrder }  style={{

                      marginHorizontal: 10,
                      width: 140,
                      height: 36,
                      borderRadius: 6,
                      borderColor: 'rgba(0,0,0,0.2)',
                      justifyContent: 'center',
                      backgroundColor: COFFEE_COLOR,
                      alignItems: 'center'
                    }} >
                      <Text style={{ color:'#fff', fontFamily: 'Roboto', fontSize: 18}}> $ { total } </Text>
                    </TouchableOpacity>
                </View>
              </View>

          </View>


        </Container>
      );
    }

    return (
      <View></View>
    )


  }
}

const s = StyleSheet.create({
  footerBar:{
    height: 55,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff'
  },
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
