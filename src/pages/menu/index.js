/* @flow */
import { GREY_COLOR, COFFEE_COLOR } from '../../config/const' ;
import moFire from '../../model/moFirebase';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container,  Content } from 'native-base';



import MenuHeader from './header';
import BenStatusBar  from "../../components/BenStatusBar";
import BenLoader  from "../../components/BenLoader";

import MenuBody from './body'

function ButtonOrder (props){


  const amount = props.data.length ;
  let total = 0 ;
  props.data.map((item)=>{
    total += parseInt(item.amount) * parseInt(item.price)
  });


  return(
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        backgroundColor: COFFEE_COLOR,
      }}>

        <View style={{
            width: '33%',
            paddingLeft: 10,
            color: '#fff'
          }}>
          <View style={{
              width:30, height: 30,
              borderWidth: 0.5,
              borderColor: '#ffffff',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text style={s.txtWhite}> { amount } </Text>

          </View>
        </View>
        <TouchableOpacity onPress={ ()=> { props.onPress() } } style={{
            width: '34%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 18, color:'#fff'}}> Order Now  </Text>
        </TouchableOpacity>
        <View style={{
            width: '33%',
            alignItems: 'flex-end',
            paddingRight: 10,

          }}>
          <Text style={s.txtWhite}> $ { total } </Text>
        </View>

    </View>

  )
}

export default class Menu extends Component {

  constructor(props){
    super(props)

    this.store = props.screenProps ;

    this.state = {
      loader:false,
      typeAction:'',
      onAction:'',
      tab:'menu',

      category:'milktea',
      data:[], // all list products from server
      cateInfo : props.navigation.getParam('cateInfo', null),
      shoppingcart:  props.screenProps.getState().shoppingcart.list

    }

    this._setup();
  }

  _setup(){

    this.model = new moFire('products');


  }

  _listenStore(){
    this.unsubscribe = this.store.subscribe(()=>{
        let cart = this.store.getState().shoppingcart.list;

        this.setState({
          shoppingcart:cart
        });

    })
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  componentDidMount(){

    this._listenStore();
    
    this.setState({loader:true})
    this.model.fetch("categories",this.state.cateInfo.uid,(data)=>{

      this.setState({
          loader:false,
          data:data
      })
    });

  }

  _onBackBtnPress(){

    this.props.navigation.goBack();

  }

  _whereStateChange(newState){
    this.props.onStateChange(newState);
  }

  _onPressItem(info){


    this.props.navigation.navigate('ProItem',{
      proInfo:info
    })



  }

  _onPressOrder(){

    this.props.navigation.navigate('CartPage')


  }
  render() {


    const { navigation } = this.props;

    const data = this.state.data ;

    return(
      <Container>
        <BenLoader visible={this.state.loader} />
        <BenStatusBar/>

        <MenuHeader onBackBtnPress={()=>{ this._onBackBtnPress() }} />

        <MenuBody onPressItem={(item)=>{ this._onPressItem(item) }} loader={this.state.loader}  data={ data } />

        { this.state.shoppingcart.length > 0 ? <ButtonOrder data={this.state.shoppingcart} onPress={()=>{  this._onPressOrder() }} /> : null }



      </Container>
    )




  }
}

const s = StyleSheet.create({

  txtWhite:{
    color: '#ffffff'
  },
});
