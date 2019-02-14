/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Container, Content } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody' ;
import NoData from '../../components/NoData';


export default class HistoryPage extends Component {
  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> History of orders </Text>
          </View>
          <View></View>
        </BenHeader>
        <Content style={{
          backgroundColor:GREY_COLOR
          }}>
            <BenBody>
                <NoData icon="time" message="You still have no orders "  />
            </BenBody>

        </Content>
      </Container>
    );
  }
}

const s = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize:18
  },
});
