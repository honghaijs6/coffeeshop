import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView,Text,InputText,KeyboardAvoidingView,TouchableOpacity  } from 'react-native';

import {  Link } from "react-router-native";

import { Container, Content,Item,Icon , Input,  Button } from 'native-base';
import Toast, {DURATION} from 'react-native-easy-toast';

import { Ionicons } from '@expo/vector-icons';


import { benAuth } from '../model/authen';



/* hook */
import {detectForm} from '../hook/before/';

class LoginPage extends Component {

  constructor(){
    super();

    this.state = {
      email:'',
      password:''
    }

    this._onSubmitLogin = this._onSubmitLogin.bind(this);
    this._onSubmitLoginWithFacebook = this._onSubmitLoginWithFacebook.bind(this);


  }

  /*WHEN*/



   _onSubmitLogin(){


     if(detectForm(['email','password'],this.state)===''){

       benAuth.doLogin(this.state,(data)=>{
        

       },(err)=>{
         this.refs.toast.show(err.message,3000)

       })

     }else{
       this.refs.toast.show("Please enter your correct infomation",1000)
     }


  }

  _onSubmitLoginWithFacebook(){
    alert('login with facebook')
  }

  _onChangeText(json){
    this._whereStateChange(json);
  }

  /* WHERE */
  _whereStateChange(newState){
    this.setState(Object.assign(this.state,newState));


  }
  render() {


        return (

            <ImageBackground source={require('../../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>

                <View
                  style={{

                    flex:1,
                    backgroundColor:'rgba(87,60,35,0.8)',


                }}>

                <Content>


                    <View style={{
                        width:'80%',
                        marginTop:'15%',
                        alignSelf:'center',
                        justifyContent:'space-between'
                    }}>
                        <ImageBackground source={require('../../assets/images/mylogo.png')} style={{width: 80, height: 106, alignSelf: 'center', marginBottom: 20}} />


                        <View style={{
                            justifyContent:'space-between',
                            height:120
                        }}>
                            <Item style={ s.item}>
                                <Icon style={{ color:'#fff' }} name='mail' />
                                <Input keyboardType="email-address"  placeholderTextColor="rgba(255,255,255,0.3)" autoCapitalize='none' onChangeText={(text)=>{ this._onChangeText({email:text}) }} style={{ color:'#ffffff'}} placeholder='E-mail'/>
                            </Item>

                            <Item style={ s.item}>
                                <Icon style={{ color:'#fff' }} name='unlock' />
                                <Input type="password"  onChangeText={(text)=>{ this._onChangeText({password:text}) }} autoCapitalize='none' placeholderTextColor="rgba(255,255,255,0.3)" style={{ color:'#ffffff'}}   placeholder='Password'/>
                            </Item>
                        </View>

                        <View style={{
                            marginTop:'15%',
                            justifyContent:'space-between',
                            height:150
                        }}>
                            <Button onPress={ this._onSubmitLogin } full style={s.button}>
                                <Text style={[s.text, {color: 'rgba(87,60,35,0.8)'}]}> Login </Text>
                            </Button>

                            <Button onPress={ this._onSubmitLoginWithFacebook } full style={[s.button,{backgroundColor:'rgba(68,103,176,0.6)'}]}>
                                <Icon style={{ color:'#fff' }} name='logo-facebook' />
                                <Text style={s.text}> Login with Facebook </Text>
                            </Button>

                        </View>

                        <View style={{
                                alignItems:'center',
                                paddingTop:40
                            }}>

                             <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Register') }}  >
                                <View style={{alignItems: 'center', padding: 6}}>
                                  <Ionicons name="md-checkmark-circle" size={20} style={{color: '#fff'}} />
                                  <Text style={s.text}> Don't have an account? </Text>
                                  <Text style={ s.text}> Sign up  </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>

                </Content>
                <Toast position='top'
                positionValue={200}
                  fadeInDuration={750}
                  fadeOutDuration={1000}
                  opacity={0.8}

                 ref="toast"/>
             </View>

            </ImageBackground>



        );
    }
}

export default LoginPage;

const s = StyleSheet.create({
    text:{ fontFamily:'Roboto',color:'#fff'},
    button:{
        backgroundColor:'rgba(255,255,255,0.7)',
        borderRadius:30,
        height:50
    },
    input:{

    },
    item:{
       borderWidth:0.5,
       borderBottomColor:'rgba(255,255,255,0.5)'

    },

});
