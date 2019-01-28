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


    }
  }

  render() {
    return (
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>
        <BenHeader>
          <BackButton />
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
              <CartBody/>
            </Content>

            {/* FOOTER BUTTON */}
            <TouchableOpacity style={{
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
