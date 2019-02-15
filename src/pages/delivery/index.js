/* @flow */


import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';


import store from '../../redux/store';

import { Container,  Content, Icon } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR, BLACK_COLOR, GOOGLE_MAP_KEY } from '../../config/const' ;


import { truncate2 } from '../../hook/ultil/ultil' ;
import MyHeader from './header';

import BenStatusBar from '../../components/BenStatusBar';
import {benAuth} from '../../model/authen';



function Item(props){

  const data = props.data ;

  return(
    <TouchableOpacity onPress={()=>{ props.onPress(data)  }} style={s.items}>
        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{ justifyContent: 'center'}}>
            <Icon style={s.icon}  name={data.icon} />
          </View>
          <View style={{marginLeft: 10}}>
              <Text style={s.txt}> {data.label} </Text>
              <Text style={s.title}>  { data.name  }   </Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

export default class DeliveryPage extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'delivery',

      mode:'none',
      userInfo: store.getState().user.userInfo ,

      personalItems:[
        {
          code:'home',
          icon:'home',
          label:'Home',
          name:'Enter your home address for delivering'
        },
        {
          code:'office',
          icon:'briefcase',
          label:'Work place',
          name:'Enter your office address for delivering'
        },
        {
          code:'current',
          icon:'navigate',
          label:'Current location',
          name:'..'
        },
        {
          code:'recent',
          icon:'time',
          label:'Recent search',
          name:store.getState().user.userInfo.recent_address
        },

      ]

    }

    this.data = [];


  }

  componentWillReceiveProps(newProps){

    this.state.personalItems[3]['name'] = newProps.userInfo.recent_address;
    this.setState({
      userInfo:newProps.userInfo
    });

  }

  addressAutoComplete(key){



    let uri = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+key+'&key='+GOOGLE_MAP_KEY;
    fetch(uri)
    .then((response) => response.json())
    .then((responseJson) => {

      const locations = responseJson.predictions;
      let data = [];
      locations.map((item)=>{
        data.push({
          code:'search',
          icon:'pin',
          label:'',
          name:item.description
        });
      })
      this.data = data ;


      this.setState({
        typeAction:'get',
        onAction:'search',
      })
      //console.log(responseJson.predictions);



    })
    .catch((error) => {
      console.error(error);
    });


  }

  _onCloseSearch(){
    this.data = [] ;
    this.setState({
      onAction:'',
    })
  }

  //
  _onItemPress(data){

    if(data.code==='search'){

      this.state.userInfo.recent_address = data.name;
      benAuth.updateInfo(this.state.userInfo,(data)=>{
        this._whereStateChange({
          onAction:'goBack',
        });
      })

    }
  }

  _whereStateChange(newState){
    switch(newState.onAction){
      case 'goBack':
        this.props.navigation.goBack();
      break;
    }
  }
  _onTextChange(text){

    this.addressAutoComplete(text);
  }



  render() {




    return (
      <Container>

        <BenStatusBar/>

        <MyHeader onBackBtnPress={()=>{  this.props.navigation.goBack()  }}  onAction={ this.state.onAction } onCloseSearch={ ()=>{  this._onCloseSearch() } } onChangeText={(text)=>{ this._onTextChange(text)  }} />

        <Content>

          <View style={[s.block]}>
              {
                this.data.map((item,index)=>{
                  return(
                    <Item onPress={ (data)=>{ this  ._onItemPress(data) } } key={index}  data={item} />
                  )
                })
              }
          </View>
          <View style={[s.block]}>
            {
              this.state.personalItems.map((item,index)=>{
                return(
                  <Item onPress={ (data)=>{ this  ._onItemPress(data) } } key={index}  data={item} />
                )
              })
            }

          </View>



          {/* chon vi tri trên ban do */}
          <View style={s.block}>
              <TouchableOpacity style={s.items}>
                  <View style={{
                    flexDirection: 'row'
                  }}>
                    <View style={{ justifyContent: 'center'}}>
                      <Icon style={s.icon} name="pin" />
                    </View>
                    <View style={{marginLeft: 10}}>
                        <Text style={s.title}>  { truncate2('Select the location on the map',41) }   </Text>

                    </View>
                  </View>
              </TouchableOpacity>
          </View>

        </Content>

      </Container>
    );
  }
}

const s = StyleSheet.create({

  icon:{
    color: COFFEE_COLOR
  },
  txt:{
    fontFamily:'Roboto',
    fontSize: 11,
    color: COFFEE_COLOR
  },
  title:{
    fontFamily:'Roboto',
    fontSize: 15,
    fontWeight: 'bold',
    color: BLACK_COLOR,
    marginLeft: -5
  },
  items:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5
  },
  block:{
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '100%',
    marginTop: 10
  }
})
