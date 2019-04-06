/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, BLACK_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody' ;
import NoData from '../../components/NoData';


function OrderItem(props){

  return(
    <TouchableOpacity style={s.card}>
        
        <View style={s.row}>
           <Icon style={s.icon} name="apps" /> 
           <Text style={s.text}>Invoice : inv-1904-0009  </Text>
        </View>

        <View style={s.row}>
            <Icon style={s.icon} name="calendar" /> 
            <Text style={s.text}>Date : 2019-04-03 11:41   </Text>
        </View>

        <View style={s.row}>
           <Icon style={s.icon} name="pin" /> 
           <Text style={s.text}>Ship to : 155 Bến Vân Đồn, Phường 6, Quận 4, Hồ Chí Minh, Vietnam    </Text>
        </View>
        
        <View style={{
          backgroundColor:'#fff',
          borderWidth:0.5,
          borderColor:COFFEE_COLOR,
          padding:1,
          borderRadius:12,
          marginTop:10
        }}>
          <View style={{width:'33.3%', borderRadius:12, alignItems:'center', padding:2, backgroundColor:COFFEE_COLOR}}>
            <Text style={{color:'#fff', fontSize:14}}> <Icon style={{color:'#fff', fontSize:12, marginRight:10}} name="bicycle"></Icon> pending </Text>
          </View>
          
        </View>

        <View style={[s.row,{marginTop:15, flexDirection:'row', justifyContent:'space-between',}]}>
           <Text style={[s.text,{color:COFFEE_COLOR}]}>Total : $4.75    </Text>
           <Text style={{backgroundColor:COFFEE_COLOR, color:'#fff', borderRadius:3, padding:3}}> 1 </Text>
        </View>
        

     </TouchableOpacity>
  )
}


export default class HistoryPage extends Component {
  render() {
    return (
      <Container>
        <BenStatusBar/>
        <BenHeader type="flex-start">
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> History of orders </Text>
          </View>
          <View></View>
        </BenHeader>
        <Content style={{
          backgroundColor:GREY_COLOR
          }}>
            <BenBody>
                
                <OrderItem />

                <OrderItem />


            </BenBody>

        </Content> 
      </Container>
    );
  }
}

const s = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems: 'center',
    paddingBottom: 5,
    
  },
  icon:{fontSize:18, color:BLACK_COLOR, marginRight: 5, width:20, alignItems:'center', alignContent: 'center',},
  text:{fontFamily:'Roboto',fontSize:14, color:'#999'},
  card:{
    
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.1)',
    padding: 15,
    backgroundColor:'#fff',
    borderRadius: 6,
    marginBottom:10
  },
  title: {
    fontFamily: 'Roboto',
    fontSize:18
  },
});
