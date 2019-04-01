/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from 'native-base';

import { COFFEE_COLOR, GREY_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody';
import BenHeader from '../../components/BenHeader';

import ProfileName from './profileName';
import LevelBoard from './levelBoard' ;

export default class RewardPage extends Component {


  constructor(props){
    super(props);

    this.store = props.screenProps ;
    this.state = {
      onAction:'',
      status:'',

      level:0,
      userInfo:this.store.getState().user.userInfo

    }
  }


  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>
           <BackButton onPress={ ()=>{ this.props.navigation.goBack() } } ></BackButton>

           <View>
             <Text style={s.title}> King Kong Milk Tea Rewards </Text>

           </View>
           <View></View>
        </BenHeader>

        <Content style={{ backgroundColor: GREY_COLOR}}>
          <BenBody>

            {/* profile board */}
            <ProfileName userInfo={ this.state.userInfo } />
            {/* END PROFILE BOARD*/}

            {/* PROFILE ACTIVITY */}
            <View style={ s.boxHolder }>

                <TouchableOpacity style={ s.btnItem } onPress={()=>{ this.props.navigation.navigate('HistoryPage') }} >
                  <Icon style={s.icon} name="time" />
                  <Text style={s.txt}>
                     History earn star
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('GuidePage') }} style={ [s.btnItem,s.lastBtnItem] }>

                  <Icon name="star" style={s.icon} ></Icon>
                  <Text style={s.txt}>
                    How to earn star
                  </Text>
                </TouchableOpacity>

            </View>

            { /*LEVEL BORAD*/ }
            <LevelBoard />
            { /* END LEVEL BORD */ }
          </BenBody>
        </Content>

      </Container>
    );
  }
}

const s = StyleSheet.create({
  boxHolder:{
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius:6,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 20
  },
  icon:{
    fontSize: 24,
    color: COFFEE_COLOR
  },
  title:{
    fontSize: 18,
    fontFamily: 'Roboto'
  },
  txt:{
    fontSize: 16,
    fontFamily: 'Roboto',
    marginLeft: 10,
    color:COFFEE_COLOR
  },
  txtWhite:{
    color: '#fff'
  },
  lastBtnItem:{
    borderBottomWidth:0
  },
  btnItem:{

    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    height: 50,
    flexDirection:'row'
  }
});
