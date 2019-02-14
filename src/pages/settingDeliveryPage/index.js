/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from 'native-base';
import BenHeader from '../../components/BenHeader';
import BenStatusBar from '../../components/BenStatusBar';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody'

import { COFFEE_COLOR, GREY_COLOR } from '../../config/const';



export default class SettingDeliveryPage extends Component {
  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>
            <BackButton onPress={()=>{  this.props.navigation.goBack() }} />
            <View>
                <Text style={ s.title }> Setting Delivery Location </Text>
            </View>
            <View></View>
        </BenHeader>
        <Content style={{backgroundColor: GREY_COLOR}}>
           <BenBody>
              <View style={{
                marginTop: 10,
                backgroundColor: '#fff',
                borderRadius: 6,
                padding:15

              }}>

                <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('RewardPage') } } style={ s.btnItem }>
                  <Icon style={s.icon} name="home" />
                  <View style={{
                    paddingLeft:10
                    }}>
                    <Text style={s.label}>
                      Your Home Address
                    </Text>
                    <Text style={s.txt}>...</Text>

                  </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('RewardPage') } } style={ [s.btnItem,s.lastBtnItem] }>
                  <Icon style={s.icon} name="planet" />
                  <View style={{
                    paddingLeft:10
                    }}>
                    <Text style={s.label}>
                      Office place Address
                    </Text>
                    <Text style={s.txt}>
                    ...
                    </Text>

                  </View>
                </TouchableOpacity>

              </View>
           </BenBody>
        </Content>
      </Container>
    );
  }
}

const s = StyleSheet.create({
  icon:{
    fontSize: 28,
    color: COFFEE_COLOR
  },
  label:{
    fontSize:11,
    fontFamily:'Roboto'
  },
  title:{
    fontSize: 18,
    fontFamily: 'Roboto',
  },
  txt:{
    fontSize: 16,
    fontFamily: 'Roboto',
    color:COFFEE_COLOR
  },
  lastBtnItem:{
    borderBottomWidth:0
  },
  btnItem:{

    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    height: 60,
    flexDirection:'row'
  }
});
