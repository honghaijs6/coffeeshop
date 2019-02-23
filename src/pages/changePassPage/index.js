import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';

import { Container,Content,Item,Label,Icon ,Text,Input, Button  } from 'native-base';
import Toast, {DURATION} from 'react-native-easy-toast';


import { COFFEE_COLOR } from '../../config/const';

/* MODEL */
import store from '../../redux/store';
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

      userInfo:store.getState().user.userInfo
    }

    this.data = {
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
    const ret = benAuth.resetPassword({
      email:this.state.userInfo.email,
      password:this.data.password
    });

    if(ret){
      this.refs.toast.show("please check your email for processing reset your password",2000);

      setTimeout(()=>{
        this.props.navigation.goBack()  
      },2000)
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
                    marginTop:'15%',
                    alignSelf:'center',
                    justifyContent:'space-between'
                }}>


                    <View style={{
                        marginTop:'15%',
                        justifyContent:'space-between',
                        height:120
                    }}>
                        <Button disabled={ disabledBtn } onPress={ this._onSubmit } full style={s.button}>
                            <Text style={{color:'#fff'}} > Confirm reset password </Text>
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
