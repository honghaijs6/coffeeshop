/* @flow weak */
import {RED_COLOR, COFFEE_COLOR, BLACK_COLOR, GREY_COLOR, STORAGE_FAVORIES } from '../../config/const';

// hooks
import getStorage from '../../hook/ultil/getStorage';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import {  Icon, Content } from 'native-base';

import BenBody from '../../components/BenBody';



const ItemPro = (props)=>{

  const item = props.data;
  const photo = item.photo.replace(/ /g,'%20');

  const  percentWidth = Platform.OS === 'android' ? '105%':'100%';

  return(
    <View style={{
        marginTop: 15,  
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 0,
        width:percentWidth
      }}>

        <TouchableOpacity style={{
          backgroundColor:'rgba(0,0,0,0.1)'
          }} onPress={()=>{ props.onPress(item) }} >
          <Image 
            resizeMode="cover" 
            style={{width:120,height: 120}}  
            source={{
              uri: photo ,
            }}  

          />

        </TouchableOpacity>

        <View style={{
          paddingLeft: 10,
          justifyContent: 'center',
          width: '66%',
          backgroundColor:'#fff'
        
        }}>
          <TouchableOpacity onPress={()=>{ props.onPress(item) }}>
              <Text style={[s.txt,s.h4]}> { item.name }  </Text>
          </TouchableOpacity>

          <Text style={s.txt}> Size L  </Text>
          <Text style={s.txt,s.price }> { item.price_m } $ </Text>

        </View>

    </View>
  )
}

class BodyFavories extends Component{

  constructor(props){
    super(props);

    this.state = {
      data:[]
    }
  }

  async componentDidMount(){
    
    const res = await getStorage(STORAGE_FAVORIES);
    if(JSON.stringify(res.data) !=='{}' ){
      
      this.props.dispatch({
        type:'set-'+STORAGE_FAVORIES,
        list:res.data
      });
      

    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      data:newProps.favories.list
    })
  }

  _onPressItem(data){

    this.props.onPressItem(data);

  }
  render(){


    return(
      <Content style={{
          backgroundColor: GREY_COLOR
        }}>

        <BenBody>

            {
              this.state.data.map((item,index)=>{
                return <ItemPro onPress={(item)=>{ this.props.onPressItem(item) }} key={index} data={item} />
              })
            }

        </BenBody>

      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    favories:state.favories
  };
}

export default connect(mapStateToProps)(BodyFavories);

const s =  StyleSheet.create({
  h4:{
    color: COFFEE_COLOR,
    fontSize: 16,
    fontWeight: '500',

  },
  price:{
    color:RED_COLOR,
    fontSize: 16,
    fontWeight: '500'
  },
  txt:{
    fontSize: 16,
    color: BLACK_COLOR,
    marginBottom:10,
    fontFamily: 'Roboto',

  }
})

