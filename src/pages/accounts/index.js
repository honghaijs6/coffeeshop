import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container, Icon, Header, Tab, Tabs, ScrollableTab, Content, Button } from 'native-base';

export default class AccountPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'feed'
    }
  }


  render(){
    return(
      <Container>
        <Content>
          <View>
              <Text>
                AccountPage here
              </Text>
          </View>

        </Content>
      </Container>

    )
  }
}
