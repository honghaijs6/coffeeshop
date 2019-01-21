import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Container, Icon, Header, Tab, Tabs, ScrollableTab, Content, Button } from 'native-base';


class shop extends Component {


    
    render() {

        const colorStyle = {
            color:'#333'
        }
        const coffeeStyle = {
            color:'#904E1A'
        }
        return (
            <View style={{
                flex:1,
                justifyContent:'space-between'
            }}>

                

                <Content>
                        <Text>Home </Text>
                </Content>

                <View style={{
                    height:60,
                    flexDirection:'row',
                    borderTopColor:'rgba(0,0,0,0.1)',
                    borderTopWidth:0.5,
                    alignItems:'center'
                }}>
                    <View style={s.tab}>
                        <Button transparent style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            
                            alignSelf:'center'
                        }} >
                            <Icon style={coffeeStyle} name="paper"></Icon>
                            <Text style={[
                                {fontSize:12},
                                coffeeStyle
                            ]} > New Feed</Text>
                        </Button>
                    </View>
                    
                    <View style={s.tab}>
                        <Button transparent style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            
                            alignSelf:'center'
                        }} >
                            <Icon style={colorStyle} name="flash"></Icon>
                            <Text style={[
                                {fontSize:12},
                                colorStyle
                            ]}> Orders </Text>
                        </Button>
                    </View>

                    <View style={s.tab}>
                        <Button transparent style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            
                            alignSelf:'center'
                        }} >
                            <Icon style={colorStyle} name="glasses"></Icon>
                            <Text style={[
                                {fontSize:12},
                                colorStyle
                            ]}> Missions</Text>
                        </Button>
                    </View>


                    <View style={s.tab}>
                        <Button transparent style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            
                            alignSelf:'center'
                        }} >
                            <Icon style={colorStyle} name="pin"></Icon>
                            <Text style={[
                                {fontSize:12},
                                colorStyle
                            ]}> Stores</Text>
                        </Button>
                    </View>

                    <View style={s.tab}>
                        <Button transparent style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            
                            alignSelf:'center'
                        }} >
                            <Icon style={colorStyle} name="person"></Icon>
                            <Text style={[
                                {fontSize:12},
                                colorStyle
                            ]}> Account</Text>
                        </Button>
                    </View>
                   
                    
                </View>


            </View>
        );
    }
}

const s = StyleSheet.create({
    container:{
        flex:1,
        
    },
    tab:{
        flex:1,
        alignItems:'center'
    }
})

export default shop;