import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Icon, Content } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR } from '../config/const' ;

import BenHeader from '../components/BenHeader';


export default class FeedViewPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'feedview'
    }
  }

  _onPressBack = ()=>{

      this.props.onStateChange({
        onAction:'change_tab',
        toTab:'feed'
      })
  }

  render(){
    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <BenHeader>

           <View style={{
             flexDirection: 'row',
             alignItems: 'center'
           }}>
               <TouchableOpacity onPress={ this._onPressBack} style={{
                 width: 40,
                 justifyContent: 'center',
                 alignItems: 'center',
               }}>
                  <Icon style={s.icon} name="arrow-back" />

               </TouchableOpacity>
               <Text style={s.txt}> Article view </Text>
           </View>


        </BenHeader>

        <Content>
          <View >
              <Text >
                Feed View here
              </Text>
          </View>

        </Content>
      </Container>

    )
  }
}

const s = StyleSheet.create({
  txt:{
    fontSize: 16,
    fontFamily: 'Roboto'
  },
  icon:{
    fontSize: 30,

  }
})
