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


import MenuHeader from './header';
import MenuBody from './body'


export default class Menu extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'menu',

      products:[]

    }
  }

  render() {
    return (
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <MenuHeader />

        <MenuBody />


      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
