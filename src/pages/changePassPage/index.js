import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';

import { Container,Content,Item,Label,Icon ,Text,Input, Button  } from 'native-base';
import Toast, {DURATION} from 'react-native-easy-toast';


import { COFFEE_COLOR } from '../../config/const';

/* MODEL */
import { benAuth } from '../../model/authen';

import BenHeader from '../../components/BenHeader';
import BenStatusBar from '../../components/BenStatusBar';
import BackButton  from '../../components/BackButton';

/* hook */
import {detectForm} from '../../hook/before/';

import { validateEmail, validatePassword, confirmPassword } from '../../hook/ultil/validate';


class ChangePassPage extends Component {


  constructor(props){

    super(props);

    this.state = {

      typeAction:'',
      onAction:'',
      status:'',


    }

    this.data = {
      name:'',
      email:'',
      password:'',
      repassword:''
    }


    this._onSubmit = this._onSubmit.bind(this);

  }

  _onChangeText(json){

     Object.assign(this.data,json);

     this.setState({
       onAction:'typing'
     })

  }

  _onProsess(){
    this._whereStateChange({typeAction:'post'});
  }
  _onFree(){
    this._whereStateChange({typeAction:''})
  }

  _onSubmit(){


    this._onProsess();
    if(detectForm(['name','email','password','repassword'], this.data )===''){

          let msg = '' ;

          if(!validateEmail(this.data.email)){
            msg = 'Please enter your correct email format';
          }else if(!validatePassword(this.data.password)){
            msg = 'please enter your at least 6 digit for your password';
          }else if(!confirmPassword(this.data.password,this.data.repassword)){
            msg = 'Your password  unmatch';
          }else{
            benAuth.register(this.data,(data)=>{
                //this._onSuccess();

            },(err)=>{

              this.refs.toast.show(err.message,3000);
              this._onFree();

            });
          }

          if(msg!==''){
            this.refs.toast.show(msg,3000);
            this._onFree();
          }






    }else{

      this.refs.toast.show("Please type your correct info!",1000);
      this._onFree();

    }
  }

  /* WHERE */

  _whereStateChange(newState){
    this.setState(Object.assign(this.state,newState))
  }

  render() {


        const disabledBtn = this.state.typeAction === '' ? false : true;

        return (

          <Container>

            <BenStatusBar  />

            <BenHeader>
              <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
              <View>
                <Text style={s.title}> Change Password </Text>
              </View>
              <View></View>
            </BenHeader>

            <Content>

                <View style={{
                    width:'80%',
                    marginTop:'5%',
                    alignSelf:'center',
                    justifyContent:'space-between'
                }}>

                    <View style={{
                        justifyContent:'space-between',
                    }}>

                        <Item style={ s.item}>
                            <Icon style={s.text} name='person' />
                            <Input
                                defaultValue={ this.data.name }
                                onChangeText={(text)=>{ this._onChangeText({name:text}) }}
                                placeholderTextColor="rgba(0,0,0,0.6)" style={s.text}  placeholder='Type your new password'/>
                        </Item>

                        <Item style={ s.item}>
                            <Icon style={s.text} name='mail' />
                            <Input autoCapitalize='none' value={this.data.email} placeholderTextColor="rgba(0,0,0,0.6)" onChangeText={(text)=>{ this._onChangeText({email:text}) }} style={s.text} placeholder='Re-type new password'/>

                        </Item>
                        



                    </View>

                    <View style={{
                        marginTop:'15%',
                        justifyContent:'space-between',
                        height:120
                    }}>
                        <Button disabled={ disabledBtn } onPress={ this._onSubmit } full style={s.button}>
                            <Text style={{color:'#fff'}} > Update </Text>
                        </Button>

                    </View>


                </View>

            </Content>
            <Toast position='top'
            positionValue={200}
              fadeInDuration={750}
              fadeOutDuration={1000}
              opacity={0.8}

             ref="toast"/>
      </Container>



        );
    }
}



const s = StyleSheet.create({

    title:{
      fontSize: 18
    },
    text:{ fontFamily:'Roboto',color:COFFEE_COLOR},
    button:{
        backgroundColor:COFFEE_COLOR,
        borderRadius:30,
        height:50
    },
    item:{
       borderWidth:0.5,
       borderBottomColor:COFFEE_COLOR,
       marginBottom:10

    },

});

export default ChangePassPage;
