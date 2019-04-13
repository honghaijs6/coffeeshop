import USER from '../../config/user';
import { GREY_COLOR, COFFEE_COLOR } from '../../config/const';


import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Icon,  Content } from 'native-base';


import BenHeader from '../../components/BenHeader' ;
import BenAvatar from '../../components/BenAvatar';
import ProfileName from './profileName';


export default class AccountPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'account',

      userInfo: props.userInfo


    }

    this._onSignOut = this._onSignOut.bind(this);
  }

  async _onSignOut(){

    await USER.logout();

    /*benAuth.doSignOut(()=>{
      //alert('signed out okay')
    },(err)=>{ console.log(err); });*/

  }

  componentWillReceiveProps(newProps){
    this.setState({
      userInfo:newProps.userInfo
    });

  }


  render(){
    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <BenHeader>
          <BenAvatar

          onPress={()=>{ this.props.navigation.navigate('EditProfilePage',{
                userInfo:this.state.userInfo
              })
          }}

            data={{
             uri: this.state.userInfo.photoURL ,
             name: this.state.userInfo.name ,
             point:this.state.userInfo.point
           }}
          />
        </BenHeader>

        <Content>

          <ProfileName userInfo={ this.state.userInfo   } />

          <View style={s.holder }>
            <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('RewardPage') } } style={ s.btnItem }>
              <Icon style={s.icon} name="star" />
              <Text style={s.txt}>
                 King Kong Milk Tea Rewards
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('HistoryPage') }}  style={ s.btnItem }>

              <Icon style={s.icon} name="time" />
              <Text style={s.txt}>
                History
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('HelpPage') }} style={ s.btnItem }>
              <Icon name="help-buoy" style={s.icon} ></Icon>
              <Text style={s.txt}>
                Help
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('SettingDeliveryPage',{
                userInfo:this.props.userInfo
              }) }} style={ s.btnItem }>

              <Icon name="settings" style={s.icon} ></Icon>
              <Text style={s.txt}>
                Setting Delivery Location
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('EditProfilePage',{
                userInfo:this.props.userInfo
              }) }} style={ s.btnItem }>

              <Icon name="person" style={s.icon} ></Icon>
              <Text style={s.txt}>
                Edit Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('ChangePassPage',{
                userInfo:this.props.userInfo
              }) }} style={ s.btnItem }>

              <Icon name="key" style={s.icon} ></Icon>
              <Text style={s.txt}>
                Change Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this._onSignOut } style={ [s.btnItem,s.lastBtnItem] }>

              <Icon name="log-out" style={s.icon} ></Icon>
              <Text style={s.txt}>
                Log out
              </Text>
            </TouchableOpacity>


          </View>
        </Content>

      </Container>

    )
  }
}

const s = StyleSheet.create({

  holderProfile:{
    marginTop: 10,
    backgroundColor: COFFEE_COLOR,
    alignItems: 'center',
  },
  holder:{

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
  lastBtnItem:{
    borderBottomWidth:0
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
