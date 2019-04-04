
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
import { myTime } from '../../hook/ultil/myTime';

import moFire from '../../model/moFirebase' ;
import Model from '../../model/model'; // shoppingcart only
import Api from '../../model/api';
import USER from '../../config/user';

import BenLoader from '../../components/BenLoader';



/* hook */
import {detectForm} from '../../hook/before/';

import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import CheckOutBody from './body';


export default class CheckOutPage extends Component{

  constructor(props){
    super(props)

    this.store = props.screenProps ;

    this.state = {

      loader:false,
      typeAction:'',
      onAction:'',
      tab:'checkout',
      shoppingcart: this.store.getState().shoppingcart.list,
      userInfo: this.store.getState().user.userInfo

    }

    this.model = new moFire('orders');
    this.moShoppingcart = new Model('shoppingcart');

    this._settup();
  }

  _settup(){
    this.moOrder = new Api('orders');

  }
  _onSuccess(){



    const data = {

      status:0,
      creator_id:this.state.userInfo.id,
      promo_code:'',
      isMobile:true,

      cart:this.state.shoppingcart,
      user:{
        uid:this.state.userInfo.uid,
        name:this.state.userInfo.name,
        email:this.state.userInfo.email,
        phone:this.state.userInfo.phone,
        photoURL:this.state.userInfo.photoURL
      },
      delivery:this.state.userInfo.recent_address,
      payment:"creditcard",
      creditcard:this.state.userInfo.creditcard
    };

    this.setState({loader:true})

    this.moOrder.post(data,(res)=>{
      if(res.name==='success'){

        this.setState({loader:false})
        // clear shoppingcart
        this.moShoppingcart.removeStoreData()

        this.refs.toast.show('Your order on processing delivery, thank you for your orders',3000);



      }
    })

  }
  async _onCheckOut(data){

    // VALIDATE
    if(detectForm(['cardName','cardNumber','expired','cvv'],data)===''){

      let userInfoData = this.state.userInfo;
      userInfoData.creditcard = data ;

      const _this = this ;

      this.setState({loader:true});
      // SAVE USER INFO creditcard
      const msg = await USER.update(this.state.userInfo.id,{
        name:this.state.userInfo.name,
        creditcard:data
      });

      this.setState({loader:false});

      if(msg==='Update success'){
        this._onSuccess();
      }else{ alert(msg) }


    }else{
      this.refs.toast.show('Please enter correct infomation',3000);
    }


  }

  render(){
    return(
      <Container>

        <BenStatusBar/>
        <BenHeader type="flex-start">
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={{
              fontSize: 16, fontFamily: 'Roboto'
            }}> Check out </Text>
          </View>

          
        </BenHeader>
        <BenLoader visible={this.state.loader} />
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
}
