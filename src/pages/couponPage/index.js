/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Container, Content, Icon } from 'native-base';

import { GREY_COLOR, COFFEE_COLOR, BLACK_COLOR } from '../../config/const';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import BenBody from '../../components/BenBody';

import H2 from '../../components/html/h2';



export default class CouponPage extends Component {


  constructor(props){
    super(props);

    this.state = {
      content:''
    }

    this._setup();

  }

  _setup(){

    //this.model = new moFire(MODE);

  }

  
  render() {

    let myBarcode = this.props.navigation.getParam('data') ;
    myBarcode =  myBarcode !== undefined ? myBarcode.data : '';

    
    return (
      <Container>
        <BenStatusBar/>

        <BenHeader type="flex-start">
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> Your Coupon Code  </Text>
          </View>
          <View></View>
        </BenHeader>

        <Content style={{ backgroundColor:GREY_COLOR }}>
          <BenBody width={'90%'}>
             <View style={s.wrapperInput}>

                <TextInput defaultValue={ myBarcode } style={{paddingHorizontal:10, width:'62%', fontFamily:'Roboto', color:BLACK_COLOR}} placeholder="enter your coupon code" />

                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Scanner') }} style={[s.btn,{backgroundColor:'#fff'}]}>
                  <Icon name="barcode"></Icon>
                </TouchableOpacity>

                <TouchableOpacity style={s.btn}>  
                  <Text style={s.btnText}> Apply </Text>
                </TouchableOpacity>

             </View>

             <H2 styleText={{color:'rgba(0,0,0,0.6)'}}>History </H2>
             <View style={s.historyList}>

             </View>

          </BenBody>
        </Content>
        
        
      </Container>
    );
  }
}

const s = StyleSheet.create({
  
  historyList:{
    
  },
  wrapperInput:{
    marginTop: 10,
    borderColor:'rgba(0,0,0,0.1)',
    borderWidth:1,
    height:50,
    borderRadius:9,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    width:60,
    backgroundColor:COFFEE_COLOR,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  btnText:{
    fontFamily:'Roboto',
    color:'#fff',
    fontSize:14
  },
  
  title: {
    fontFamily: 'Roboto',
    fontSize:18
  },
});
