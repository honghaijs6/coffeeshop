import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground  } from 'react-native';

import {  Link } from "react-router-native";

import { Container,  Content,Item,Label,Icon , Input, Text, Button } from 'native-base';


class Register extends Component {
    render() {
        return (

            <ImageBackground source={require('../../assets/images/bg.jpg')} style={{width: '100%', height: '100%'}}>

                <Container 
                style={{
                    
                    flex:1,
                    backgroundColor:'rgba(255,255,255,0.9)',
                    

                }}>

                <View style={{paddingTop:14}}></View>
                <View style={s.header} >
                    <View style={{ width:'35%',}}>
                        <Link to="/" style={ s.btn}>  
                            <Icon style={[s.text,{marginLeft:10}]} name='arrow-back' />
                        </Link>
                    </View>

                    <View style={{ width:'65%'}}>
                        <Text style={[s.text,s.title]}> Register Account </Text>
                    </View>
                </View>
                <Content>
                    
                    <View style={{
                        width:'80%',
                        marginTop:'15%',
                        alignSelf:'center',
                        justifyContent:'space-between'
                    }}>

                        <View style={{
                            justifyContent:'space-between',
                            height:180
                        }}>

                            <Item style={ s.item}> 
                                <Icon style={s.text} name='person' />
                                <Input placeholderTextColor="rgba(0,0,0,0.3)" style={s.text} placeholder='Your full name'/>
                            </Item>
                        
                            <Item style={ s.item}> 
                                <Icon style={s.text} name='mail' />
                                <Input placeholderTextColor="rgba(0,0,0,0.3)" style={s.text} placeholder='Type your E-mail'/>
                            </Item>
                            
                            <Item style={ s.item}>
                                <Icon style={s.text} name='unlock' />
                                <Input placeholderTextColor="rgba(0,0,0,0.3)" style={s.text}  placeholder='Password'/>
                            </Item>
                        </View>

                        <View style={{
                            marginTop:'15%',
                            justifyContent:'space-between',
                            height:120
                        }}>
                            <Button full style={s.button}>
                                <Text style={{color:'#fff'}} > Register </Text>
                            </Button>

                            
                        
                        </View>
                        
                        
                    </View>
                
                </Content> 
               
            </Container>    
                
            </ImageBackground>
                
            
      
        );
    }
}



const s = StyleSheet.create({

    
    header:{
        flexDirection:'row',
        height:50,
        borderBottomWidth:0.3,
        alignItems:'center',
        borderBottomColor:'rgba(87,60,35,0.3)',
                    
        fontFamily: 'Roboto',
    },
    text:{ fontFamily:'Roboto',color:'rgba(87,60,35,0.9)'},
    button:{
        backgroundColor:'rgba(87,60,35,0.7))',
        borderRadius:30,
        height:50
    },
    input:{
        
    },
    item:{ 
       borderWidth:0.5,
       borderBottomColor:'rgba(87,60,35,0.3)'
    
    },
    
});

export default Register;
