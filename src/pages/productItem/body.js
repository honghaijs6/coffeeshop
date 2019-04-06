/* @flow weak */
import { GREY_COLOR, COFFEE_COLOR, RED_COLOR } from '../../config/const' ;


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'native-base';

const BodyItem  = (props) =>{

  const info = props.info ;


  if(JSON.stringify(info)!=='{}'){

    //const stylePrice_s = info['price_s'].toString() === info['price'].toString() ? {color:COFFEE_COLOR} : { color:'#333' };
    const stylePrice_m = info['price_m'].toString() === info['price'].toString() ? {color:COFFEE_COLOR} : { color:'#333' };

    const photo = props.info.photo.replace(/ /g,'%20');
    return(

      <View>
          <View style={{
            backgroundColor: '#fff',
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgba(0,0,0,0.2)'
          }}>

             <Image resizeMode="contain" style={{height: 320,width: null}} source={{uri: photo+`&w=320&h=320&buster=${Math.random()}` }} />

             <View style={{
               backgroundColor: '#fff',
               padding: 10,
             }}>

               <Text style={s.h4}> { props.info.name } </Text>
               <Text style={s.txt}> { props.info.note || '...' } </Text>

             </View>
          </View>

          <View>
            <Text style={{paddingHorizontal: 10, marginTop: 15,marginBottom:5, fontSize: 18, fontFamily: 'Roboto'}}> Select Size  </Text>

            {/*<TouchableOpacity onPress={()=>{ props.onSelectPrice({price:props.info.price_s,option:'size S'}) }} style={s.btnSelect}>
                <View style={s.rowItem}>
                   <View style={{ flexDirection:'row', alignItems:'center'}}>
                     <Icon style={[s.icon,stylePrice_s]} name="checkmark-circle" />
                     <Text style={[s.txt,stylePrice_s]}> Size 355 ml </Text>
                   </View>

                   <View style={{ textAlign:'right'}}>
                    <Text style={[s.txt,{ fontSize:16, color:'red', textAlign:'right'}]}> { props.info.price_s} $</Text>
                   </View>
                </View>
            </TouchableOpacity>*/}

            <TouchableOpacity onPress={()=>{ props.onSelectPrice({price:props.info.price_m,option:'size M'}) }} style={s.btnSelect}>
                <View style={s.rowItem}>
                   <View style={{ flexDirection:'row', alignItems:'center'}}>
                     <Icon style={[s.icon,stylePrice_m]} name="checkmark-circle" />
                     <Text style={[s.txt,stylePrice_m]}> Size L </Text>
                   </View>

                   <View style={{ textAlign:'right'}}>
                    <Text style={[s.txt,{ fontSize:16, color:'red', textAlign:'right'}]}> { props.info.price_m} $</Text>
                   </View>
                </View>
            </TouchableOpacity>


          </View>


      </View>
    )
  }

  return(
      <View>
      </View>
  )




}

export default BodyItem;

const s = StyleSheet.create({

  icon:{fontSize:16, marginRight:5},
  btnSelect:{
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  rowItem:{

     flexDirection:'row',
     justifyContent:'space-between'
  },
  txt:{
    fontFamily: 'Roboto',
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COFFEE_COLOR
  },
});
