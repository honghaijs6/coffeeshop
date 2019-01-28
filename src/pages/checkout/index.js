
import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { Container,  Content, Icon,  } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR, RED_COLOR, BLACK_COLOR } from '../../config/const' ;

import Toast, {DURATION} from 'react-native-easy-toast';


/* MODEL */
import { benAuth } from '../../model/authen';


/* hook */
import {detectForm} from '../../hook/before/';

import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import CheckOutBody from './body';


export default class CheckOutPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'checkout',

      userInfo:props.userInfo

    }


  }

  _onSuccess(){

    this.refs.toast.show('Your order on processing delivery, thank you for your orders',3000);
    setTimeout(()=>{
      this.props.onStateChange({
        onAction:'change_tab',
        toTab:'feed'
      })
    },3000)

  }
  _onCheckOut(data){

    // VALIDATE
    if(detectForm(['cardName','cardNumber','expired','cvv'],data)===''){

      let userInfoData = this.state.userInfo;
      userInfoData.creditcard = data ;

      const _this = this ;

      benAuth.updateInfo(userInfoData,(data)=>{
        this._onSuccess()
      })

    }else{
      this.refs.toast.show('Please enter correct infomation',3000);
    }


  }

  render(){
    if(this.props.onTab === this.state.tab){

       return(
         <Container style={{
           backgroundColor:GREY_COLOR,
         }}>

           <BenHeader>
             <BackButton onPress={()=>{ alert('back btn click') }} />
             <View>
               <Text style={{
                 fontSize: 16, fontFamily: 'Roboto'
               }}> Setup Credit card </Text>
             </View>

             <Text>  </Text>
           </BenHeader>
           <Content>
              <CheckOutBody onPress={ (data)=>{ this._onCheckOut(data) } }  />
           </Content>


           <Toast position='top'
           positionValue={200}
             fadeInDuration={750}
             fadeOutDuration={1000}
             opacity={0.8}

            ref="toast"/>
         </Container>
       )
    }

    return(
      <View></View>
    )
  }
}
