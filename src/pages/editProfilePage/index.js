import React, { Component } from 'react';
import { View, StyleSheet  } from 'react-native';

import { Container,Content,Item,Label ,Text,Input, Button  } from 'native-base';
import Toast from 'react-native-easy-toast';


import DatePicker from 'react-native-datepicker'




import { COFFEE_COLOR } from '../../config/const';

/* MODEL */
import store from '../../redux/store';
import { benAuth } from '../../model/authen';

import BenHeader from '../../components/BenHeader';

import USER from '../../config/user';

import BenStatusBar from '../../components/BenStatusBar';
import BackButton  from '../../components/BackButton';

/* hook */
import {detectForm} from '../../hook/before/';

import BenLoader from '../../components/BenLoader';



import { validateEmail, validatePassword, confirmPassword } from '../../hook/ultil/validate';


class EditProfilePage extends Component {


  constructor(props){

    super(props);

    this.state = {
      loader:false,
      typeAction:'',
      onAction:'',
      status:'',

    }

    this.data = store.getState().user.userInfo


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

  async _onSubmit(){



    this._onProsess();
    if(detectForm(['name','email','phone'], this.data )===''){

          let msg = '' ;

          if(!validateEmail(this.data.email)){
            msg = 'Please enter your correct email format';
          }else{

             this.setState({loader:true});

             const resMsg =  await USER.update(this.data.id,{
               name:this.data.name,
               phone:this.data.phone,
               birthday:this.data.birthday,
               recent_address:"no-address"
             });

             this.refs.toast.show(resMsg,3000);
             this.setState({loader:false});


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

        let userInfo = this.data ;
        userInfo.birthday = userInfo.birthday || '2019-02-23';

        return (

          <Container>

            <BenStatusBar  />

            <BenHeader>
              <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
              <View>
                <Text style={s.title}> Edit Profile </Text>
              </View>
              <View></View>
            </BenHeader>

            <BenLoader visible={ this.state.loader } />

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

                        <Item stackedLabel style={ s.item}>


                            <Label style={s.label}>  Full name</Label>
                            <Input
                                defaultValue={ userInfo.name }
                                onChangeText={(text)=>{ this._onChangeText({name:text}) }}
                                placeholderTextColor="rgba(0,0,0,0.6)" style={s.text}  placeholder='Full name'/>
                        </Item>

                        <Item stackedLabel style={ s.item}>
                            <Label style={s.label}> E-mail  </Label>
                            <Input
                              disabled
                              defaultValue={ userInfo.email }
                              placeholderTextColor="rgba(0,0,0,0.6)"
                              onChangeText={(text)=>{ this._onChangeText({email:text}) }} style={s.text} placeholder='E-mail'/>

                        </Item>

                        <Item stackedLabel style={ s.item}>
                            <Label style={s.label}>  Phone number </Label>
                            <Input
                              keyboardType='numeric'
                              defaultValue={ userInfo.phone }
                              placeholderTextColor="rgba(0,0,0,0.6)"
                              onChangeText={(text)=>{ this._onChangeText({phone:text}) }} style={s.text} placeholder='Phone number'/>

                        </Item>

                        <Item style={ s.item}>

                            <Text style={s.label} > Your Birthday :  </Text>

                            <DatePicker
                              style={{width:100, paddingVertical: 5}}
                              date={ userInfo.birthday }
                              mode="date"
                              placeholder="select date"
                              format="YYYY-MM-DD"

                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              showIcon={false}
                              hideText={false}
                              allowFontScaling={true}
                              customStyles={{

                                dateInput: {
                                  marginLeft: 0,
                                  borderWidth:0,


                                }
                                // ... You can check the source to find the other keys.

                              }}
                              onDateChange={ (date)=>{  this._onChangeText({birthday:date}) } }
                            />

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
    icon:{
      fontSize: 14,
      color:COFFEE_COLOR
    },
    label:{
      marginLeft: -7,
      fontFamily: 'Roboto',
      color: COFFEE_COLOR,
    },
    text:{ fontFamily:'Roboto', marginLeft: -5},
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

export default EditProfilePage;
