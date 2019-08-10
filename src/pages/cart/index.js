/* @flow */

import USER from '../../config/user'

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';


import { Container,  Content  } from 'native-base';
import {  COFFEE_COLOR,  } from '../../config/const' ;

import BenStatusBar  from "../../components/BenStatusBar";
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import RedeemModal from './RedeemModal';


import CartBody from './CartBody';


class Cart extends Component {

  constructor(props){
    super(props)


    this.state = {

      typeAction:'',
      onAction:'',
      tab:'cart',
      data: props.shoppingcart.list || [],
      userInfo: props.user.userInfo || {},
      isOpenModal:false
    }


    this._onOrderNow = this._onOrderNow.bind(this);
    this._onItemSelect = this._onItemSelect.bind(this);


  }

  _onChangeText(json){
    this.setState(Object.assign(this.state.userInfo,json));
  }
  _onOrderNow(){

    let msg = '';
    if(JSON.stringify(this.state.userInfo)!=='{}'){

      if(this.state.userInfo.phone.length < 6 ){
        msg = 'Please enter your phone number ';
      }else if(this.state.userInfo.recent_address === null  ){
        msg = 'Please add your delivery address '
      }else{

        this.props.navigation.navigate('CheckOutPage');

      }

      msg !== '' ? Alert.alert('Message',msg) : null
    }else{
      this.props.navigation.navigate('DealPage',{
        title:'Member',
        message:'Login or Sign up an account to continue your orders'
      })
    }



  }
  _onBackBtnPress(){

    this.props.navigation.goBack();

  }

  // Go back to product Item page
  _onItemSelect(data){

    this.props.navigation.navigate('ProItem',{
      proInfo:data
    });

  }

  componentDidMount(){

    
     if(this.props.user.isLoggedIn){

        USER.getInfo();
        
        setTimeout(()=>{
          this._isAvailableRedeem();
        },2000)
        
     }else{  
        // LOGIN
        this.props.navigation.navigate('DealPage');      
     }
     


  }

  _isAvailableRedeem(){
    if(this.props.user.isLoggedIn){

      if(this.props.user.redeem > 0){
        //Alert.alert('Message','Woohoo!!  Now, You had have enough points to get 01 free');

        this.setState({isOpenModal:true})

      }
    }
  }
  componentWillReceiveProps(newProps){

    if(newProps.shoppingcart.list.length>0){

      this.setState({
        userInfo:newProps.user.userInfo,
        data:newProps.shoppingcart.list
      });



    }else{ this.props.navigation.goBack(); }

  }

  render() {


    return (
      <Container>

        <BenStatusBar/>
        <BenHeader>
          <BackButton onPress={()=>{ this._onBackBtnPress() }} />
          <View>
            <Text style={{
              fontSize: 16, fontFamily: 'Roboto'
            }}> Your Orders Cart </Text>
          </View>

          <Text>  </Text>
        </BenHeader>

        
        <RedeemModal 
            onClose={()=>{ this.setState({isOpenModal:false}) }}
            visible={ this.state.isOpenModal } 
        />

        <View style={{
          flex: 1,
          justifyContent: 'space-between'
        }}>

            <Content>
              <CartBody
                onPressGotoCouponPage={()=>{  this.props.navigation.navigate('CouponPage') }}
                onPressGotoSettingAdd={()=>{ this.props.navigation.navigate('DeliveryPage') }}
                onItemSelect={ this._onItemSelect }
                onChangeText={ (data)=>{ this._onChangeText(data) } }
                data={this.state.data} coupon={this.props.user.coupon} userInfo={ this.state.userInfo } />

            </Content>

            {/* FOOTER BUTTON */}
            <TouchableOpacity onPress={ this._onOrderNow } style={{
              height: 50,
              backgroundColor: COFFEE_COLOR,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={[s.txt, {color: '#fff', fontFamily: 'Roboto', fontSize: 16}]}> Order Now </Text>


            </TouchableOpacity>

        </View>

      </Container>
    );

  }
}

function mapStateToProps(state){
  return {
    shoppingcart:state.shoppingcart,
    user:state.user
  }
}

export default connect(mapStateToProps)(Cart);

const s = StyleSheet.create({

  txt:{
    fontFamily: 'Roboto',
    fontSize: 14
  },
  block:{
    padding: 10,
    backgroundColor: '#fff'
  },
  row:{
    flexDirection: 'row',
    marginVertical: 10
  },
  input:{
    width: '80%',
    fontSize: 16,
    fontFamily: 'Roboto'
  },
  icon:{
    fontSize:26,
    color: COFFEE_COLOR,
    marginHorizontal: 15
  }
});
