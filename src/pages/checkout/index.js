import Model from '../../model/model'; // shoppingcart only
import Api from '../../model/api';
import USER from '../../config/user';

/* hook */
import {detectForm} from '../../hook/before/';


import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import { Container,  Content} from 'native-base';
import Toast from 'react-native-easy-toast';


import BenLoader from '../../components/BenLoader';


import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';

import CheckOutBody from './body';


class CheckOutPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      loader:false,
      typeAction:'',
      onAction:'',
      tab:'checkout',
      shoppingcart: props.shoppingcart.list,
      userInfo:props.user.userInfo

    }
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

        setTimeout(()=>{
          this.props.navigation.navigate('Home')
        },2000);
        


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

  componentWillReceiveProps(newProps){
    this.setState({
      userInfo:newProps.user.userInfo,
      shoppingcart:newProps.shoppingcart.list
    })
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

function mapStateToProps(state){
  return {
    user:state.user,
    shoppingcart:state.shoppingcart
  }
}

export default connect(mapStateToProps)(CheckOutPage);
