/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, 
  WebView
} from 'react-native';

import { Container, Content } from 'native-base';

import { GREY_COLOR } from '../../config/const';

import moFire from '../../model/moFirebase';

import HTMLView from 'react-native-htmlview';


import BenStatusBar from '../../components/BenStatusBar';
import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import BenBody from '../../components/BenBody' ;

const MODE = 'company';



export default class HelpPage extends Component {


  constructor(props){
    super(props);

    this.state = {
      content:''
    }

    this._setup();

  }

  _setup(){

    this.model = new moFire(MODE);

  }

  componentDidMount(){
    this.model.fetch("code","howtogetpoint",(res)=>{
      const content = res[0]['content'];
      this.setState({content:content});

      

    })
  }
  render() {

    const htmlContent = `
      <style>
        body,*{
          font-size: 18px;
          padding:10px;
          color:red
        }
        p{
          font-size:20px;
        }
      </style>
      <body>
        ${ this.state.content || '' }
      </body>
    ` ;

    return (
      <Container>
        <BenStatusBar/>
        <BenHeader>
          <BackButton onPress={()=>{ this.props.navigation.goBack() }} />
          <View>
            <Text style={s.title}> How to earn star  </Text>
          </View>
          <View></View>
        </BenHeader>


        <WebView
          originWhitelist={['*']}
          source={{html: htmlContent }}
          automaticallyAdjustContentInsets={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          decelerationRate="normal"
          javaScriptEnabledAndroid={true}
          

        />

        
      </Container>
    );
  }
}

const s = StyleSheet.create({
  
  h1:{
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  h3:{
    fontFamily: 'Roboto',
    fontSize: 22,
    marginBottom: 10
  },
  title: {
    fontFamily: 'Roboto',
    fontSize:18
  },
});
