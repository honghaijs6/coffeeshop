/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import { Container, Content, Icon } from 'native-base';

import store from '../../redux/store';

import { COFFEE_COLOR, USERS_LEVEL, GREY_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenBody from '../../components/BenBody';
import BenHeader from '../../components/BenHeader';

import ProfileName from './profileName';
import LevelBoard from './levelBoard' ;

export default class RewardPage extends Component {


  state = {
    onAction:'',
    status:'',

    level:0,
    userInfo:store.getState().user.userInfo

  }

  _onPressBack(){
    //this.props.navigation.goBack();
  }
  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>

           <View style={{
             flexDirection: 'row',
             alignItems: 'center'
           }}>
               <TouchableOpacity onPress={()=>{ this.props.navigation.goBack() }} style={{
                 width: 40,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>
                  <Icon style={s.icon} name="arrow-back" />

               </TouchableOpacity>
               <Text style={s.txt}> King Kong Milk Tea Rewards </Text>
           </View>


        </BenHeader>

        <Content style={{ backgroundColor: GREY_COLOR}}>
          <BenBody>

            {/* profile board */}
            <ImageBackground resizeMode="repeat" source={require('../../../assets/images/profileBg.png')} style={{
              backgroundColor:COFFEE_COLOR,
              height: 180,
              justifyContent: 'flex-end',
              padding: 20,
              borderRadius: 6,
              marginTop: 20
            }}>

              <View>
                <Text style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  fontFamily: 'Roboto',
                  color: '#fff'
                }}> { this.state.userInfo.name } </Text>
                <Text style={s.txtWhite}> { USERS_LEVEL[this.state.level]+' member' } </Text>
              </View>

            </ImageBackground>

            {/* END PROFILE BOARD*/}

            {/* PROFILE ACTIVITY */}
            <View style={ s.boxHolder }>

                <TouchableOpacity style={ s.btnItem }>
                  <Icon style={s.icon} name="time" />
                  <Text style={s.txt}>
                     History earn star
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ this._onSignOut } style={ [s.btnItem,s.lastBtnItem] }>

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
