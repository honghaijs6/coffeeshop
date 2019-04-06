/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native';

import { Container, Content } from 'native-base';
import { GREY_COLOR } from '../../config/const';


/* FOR DATA */
import Api from '../../model/api';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody' ;


import BenLoader from '../../components/BenLoader';

import NoData from '../../components/NoData';

import OrderItem from './OrderItem';


export default class HistoryPage extends Component {

  constructor(props){

    super(props)
    this.store = props.screenProps; 

    this.state = {
      loader:false,
      data:[]
    }

    this.userInfo = this.store.getState().user.userInfo;  
    this._setup();

  
  }
  
  _setup(){ 
    this.Api = new Api('orders');

    this.Api.set('method',{
      name:'listAll',
      params:'all?creator_id='+this.userInfo.id
    });
    
  }

  

  componentDidMount(){
    
    this.setState({loader:true})
    this.Api.fetch((res)=>{

      res = res.data ;

      if(res.name==='success'){
        this.setState({
          loader:false,
          data:res.rows
        });
      }
      
    });


  }


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
        <BenLoader visible={this.state.loader} />
        <Content style={s.bg}>
            <BenBody>
                {
                  this.state.data.map((item)=>{
                    return(
                      <OrderItem 
                        onPress={()=>{
                          this.props.navigation.navigate('HistoryPageView',{
                            data:item
                          })
                        }} 
                        key={item.id} data={item} />
                    )
                  })
                }
            </BenBody>

        </Content> 
      </Container>
    );
  }
}

const s = StyleSheet.create({
  bg:{
    backgroundColor:GREY_COLOR
  },
  title: {
    fontFamily: 'Roboto',
    fontSize:18
  },
});
