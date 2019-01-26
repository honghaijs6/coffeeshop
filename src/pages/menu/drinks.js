/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import {RED_COLOR, COFFEE_COLOR, BLACK_COLOR, GREY_COLOR } from '../../config/const';

import {  Icon, Content } from 'native-base';
import BenBody from '../../components/BenBody';

import drinksData from './data.json';



export default class BodyDrinks extends Component{

  render(){

    
    return(
      <Content style={{
          backgroundColor: GREY_COLOR
        }}>

        <BenBody>

            {
              drinksData.drinks.map((item, index)=>{

                return (
                  <View key={index} style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    borderBottomColor: 'rgba(0,0,0,0.1)',
                    borderBottomWidth: 0.5,
                    paddingBottom: 15
                  }}>

                    <TouchableOpacity>
                      <Image style={{width:120,height: 120}}  source={{uri: item.photo }}  />
                    </TouchableOpacity>

                    <View style={{
                      paddingLeft: 10,
                      justifyContent: 'center',

                      width: '75%',


                    }}>
                       <TouchableOpacity>
                          <Text style={[s.txt,s.h4]}> { item.name }  </Text>
                       </TouchableOpacity>

                       <Text style={s.txt}> Size 240 ml  </Text>
                       <Text style={s.txt,s.price }> { item.price } $ </Text>

                    </View>

                  </View>
                )
              })
            }

        </BenBody>

      </Content>
    )
  }
}

const s =  StyleSheet.create({
  h4:{
    color: COFFEE_COLOR,
    fontSize: 20,
    fontWeight: 'bold',

  },
  price:{
    color:RED_COLOR,
    fontSize: 20,
    fontWeight: 'bold'
  },
  txt:{
    fontSize: 16,
    color: BLACK_COLOR,
    marginBottom:10,
    fontFamily: 'Roboto',

  }
})
