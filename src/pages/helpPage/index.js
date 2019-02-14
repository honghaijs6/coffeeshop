/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';

import { Container, Content } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody' ;
import NoData from '../../components/NoData';


export default class HelpPage extends Component {
  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> Terms of use  </Text>
          </View>
          <View></View>
        </BenHeader>
        <Content style={{
          backgroundColor:GREY_COLOR
          }}>
            <BenBody>
                <View style={{
                  padding: 30
                }}>

                  <View style={{
                    alignItems: 'center'
                  }}>
                      <Text style={s.h3}> TERMS OF USE  </Text>
                      <Text style={s.h1}> KING KONG MILK TEA DELIVERY </Text>

                  </View>

                  <WebView
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1
                    }}
                    source={{uri: 'https://github.com/facebook/react-native'}}
                    style={{marginTop: 20}}
                  />

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
    fontSize:18
  },
});
