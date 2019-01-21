import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground  } from 'react-native';

import {  Link } from "react-router-native";

import { Container, Content,Item,Icon , Input, Text, Button } from 'native-base';


class login extends Component {
    render() {
        return (

            <ImageBackground source={require('../../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>

                <Container 
                style={{
                    
                    flex:1,
                    backgroundColor:'rgba(87,60,35,0.8)',
                    

                }}>

                <Content>
                    
                    <View style={{
                        width:'80%',
                        marginTop:'45%',
                        alignSelf:'center',
                        justifyContent:'space-between'
                    }}>

                        <View style={{
                            justifyContent:'space-between',
                            height:120
                        }}>
                            <Item style={ s.item}> 
                                <Icon style={{ color:'#fff' }} name='mail' />
                                <Input placeholderTextColor="rgba(255,255,255,0.3)" style={{ color:'#ffffff'}} placeholder='E-mail'/>
                            </Item>
                            
                            <Item style={ s.item}>
                                <Icon style={{ color:'#fff' }} name='unlock' />
                                <Input secureTextEntry={true} placeholderTextColor="rgba(255,255,255,0.3)" style={{ color:'#ffffff'}}   placeholder='Password'/>
                            </Item>
                        </View>

                        <View style={{
                            marginTop:'15%',
                            justifyContent:'space-between',
                            height:120
                        }}>
                            <Button full style={s.button}>
                                <Text style={s.text}> Login </Text>
                            </Button>

                            <Button full style={[s.button,{backgroundColor:'rgba(68,103,176,0.6)'}]}>
                                <Icon style={{ color:'#fff' }} name='logo-facebook' />
                                <Text style={s.text}> Login with Facebook </Text>
                            </Button>
                        
                        </View>
                        
                        <View style={{
                                alignItems:'center',
                                paddingTop:40
                            }}>
                             <Text style={s.text}> Don't have an account? </Text>
                             <Link>
                               
                                <Text style={ s.text}> Sign up  </Text>
                            </Link>
                                
                        </View>

                    </View>
                
                </Content> 
               
            </Container>    
                
            </ImageBackground>
                
            
      
        );
    }
}

export default login;

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