/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Container, Content } from 'native-base';

import { GREY_COLOR, BLACK_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import BenBody from '../../components/BenBody';
import CardName from './cardName';


export default class CollectStarPage extends Component {


  constructor(props){
    super(props);

    this.store = props.screenProps ;
    
    this.state = {
      userInfo: this.store.getState().user.userInfo
    }

    this._setup();

  }

  _setup(){

    //this.model = new moFire(MODE);

  }

  
  render() {

    

    return (
      <Container>
        <BenStatusBar/>
 
        <BenHeader>
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> Scan member code  </Text>
          </View>
          <View></View>
        </BenHeader>

        <Content style={{backgroundColor:GREY_COLOR}}>
            <BenBody>
                <CardName userInfo={ this.state.userInfo } />
                <View style={{marginTop:10}}>
                    <Text style={s.txt}>Collecting more star point to receive more coupon code </Text>
                </View>
            </BenBody>
            
        </Content>


        
        
      </Container>
    );
  }
}

const s = StyleSheet.create({
  
  h1:{
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  h3:{
    fontFamily: 'Roboto',
    fontSize: 22,
    marginBottom: 10
  },
  title: {
    fontFamily: 'Roboto',
    fontSize:18,
    color:BLACK_COLOR
  },
  txt:{
    fontFamily: 'Roboto',
    fontSize:16,
    color:BLACK_COLOR
  },
});
