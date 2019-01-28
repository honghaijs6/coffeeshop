import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Icon, Header, Tab, Tabs, ScrollableTab, Content, Button } from 'native-base';


import BenHeader from '../../components/BenHeader' ;
import BenAvatar from '../../components/BenAvatar';

import { GREY_COLOR, COFFEE_COLOR } from '../../config/const';

import { doSignOut } from '../../model/initFireBase';

export default class AccountPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'account'
    }

    this._onSignOut = this._onSignOut.bind(this);
  }

  _onSignOut(){

    doSignOut(()=>{
      //alert('signed out okay')
    },(err)=>{ console.log(err); });

  }


  render(){
    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <BenHeader>
          <BenAvatar
             onPress={ this._onPressAvarar }
             data={{
              uri:'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/p160x160/41795526_2082548408445932_7771390061051904000_n.jpg?_nc_cat=109&_nc_oc=AQnW3o2N69YmcjDnxCqPK-AYEGDWGy58AdAu6F6mG8LqDBuhXpyRoKX2l_I27tW92Fek7R-R893bbrzdjUPf59qk&_nc_ht=scontent.fsgn5-6.fna&oh=927a69754880b732e2c3ce267d1a0af9&oe=5CFA7E33',
              name:'Benjamin',
              point:100
            }}
          />
        </BenHeader>
        <View style={s.holder }>
          <TouchableOpacity style={ s.btnItem }>
            <Icon style={s.icon} name="star" />
            <Text style={s.txt}>
               King Kong Milk Tea Rewards
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ s.btnItem }>

            <Icon style={s.icon} name="time" />
            <Text style={s.txt}>
              History
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ s.btnItem }>
            <Icon name="help-buoy" style={s.icon} ></Icon>
            <Text style={s.txt}>
              Help
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={ s.btnItem }>

            <Icon name="settings" style={s.icon} ></Icon>
            <Text style={s.txt}>
              Setting
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ this._onSignOut } style={ s.btnItem }>

            <Icon name="log-out" style={s.icon} ></Icon>
            <Text style={s.txt}>
              Log out
            </Text>
          </TouchableOpacity>


        </View>
      </Container>

    )
  }
}

const s = StyleSheet.create({
  holder:{
    height: '100%',
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  btnItem:{
    width: '90%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    height: 50,
    flexDirection:'row'
  }
})
