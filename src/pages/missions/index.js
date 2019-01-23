import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container, Icon, Header, Tab, Tabs, ScrollableTab, Content, Button } from 'native-base';

import { GREY_COLOR } from '../../config/const'

export default class MissionPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'mission'
    }
  }


  render(){
    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>
        <Content>
          <View>
              <Text>
                Missions here
              </Text>
          </View>

        </Content>
      </Container>

    )
  }
}