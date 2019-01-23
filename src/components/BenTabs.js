import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

import { COFFEE_COLOR, GREY_COLOR} from '../config/const'

export default class BenTabs extends Component {


    state = {
      onTab:'feed',
    }

    _onPress(data){
      this.props.onPress(data);
      this.setState({
        onTab:data.tab
      });
    }


    render() {

        const data = this.props.data ;
        let tabColor = COFFEE_COLOR;


        return (
          <View style={ s.container} >

              { this.props.children }

              <View style={ s.tabbar}>


                      {
                        data.map((item,index)=>{

                          const activeColor = this.state.onTab === item.tab ? tabColor : '#333';

                          if(!item.hidden ){
                            return(
                              <View key={ index } style={s.tab}>
                                <Button onPress={ ()=>{ this._onPress(item) } }  transparent  style={{
                                    flexDirection:'column',
                                    justifyContent:'center',
                                    alignSelf:'center'
                                }} >
                                    <Icon style={{
                                      color:activeColor
                                    }} name={item.icon}></Icon>
                                    <Text style={[
                                        {fontSize:12},
                                        {color:activeColor}

                                    ]} > { item.name } </Text>
                                </Button>
                              </View>
                            )
                          }

                        })
                      }



              </View>

          </View>
        );
    }
}


const s = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#fff'
    },
    tabbar:{
      height:55,
      flexDirection:'row',
      borderTopColor:'rgba(0,0,0,0.1)',
      borderTopWidth:0.5,
      alignItems:'center'
    },
    tab:{
        flex:1,
        alignItems:'center',

    }
})
