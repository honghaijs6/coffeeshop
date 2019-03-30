import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Icon,  Text, Content } from 'native-base';

import moment from 'moment';
import Api from '../../model/api';

// LIB Component
import BenHeader from '../../components/BenHeader'
import BenAvatar from '../../components/BenAvatar';
import MyAvatar from '../../components/MyAvatar';
import BenNoti from '../../components/BenNoti';

import { GREY_COLOR, COFFEE_COLOR } from '../../config/const'

import MyCard from './MyCard';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardImage from './CardImage';

import Box from './Box';
import { AVATAR_URL } from '../../config/const';




export default class FeedPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'feed',

      userInfo: props.userInfo,

    }

    this.data = [];


    this._setup();

    this._onPressAvarar  = this._onPressAvarar.bind(this);
    this._onPressNoti = this._onPressNoti.bind(this) ;

  }


  /* WHEN*/
  _setup(){
    this.Api = new Api('feeds');
    this.Api.set('method',{
      name:'listAll',
      params:'all'
    })
  }

  _onPressAvarar(){
    alert('Click avatar ')
  }

  _onPressNoti(){
    alert('click notifications')
  }

  _onCardPress(data){

      this.props.navigation.navigate('FeedView',{
        data:data
      });


  }

  _fetchData(){
    this.Api.fetch((res)=>{
      this.data = res.data.rows;

      this.setState({
        onAction:'_fetchData'
      })


    })
  }

  componentWillReceiveProps(newProps){
    if(this.state.tab===newProps.onTab){

      this._fetchData()
    }

  }


  render(){


    return(
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>
        <BenHeader>
           <BenAvatar

              data={{
               uri: this.state.userInfo.photoURL ,
               name: this.state.userInfo.name ,
               point:this.state.userInfo.point
             }}
           />
           <BenNoti onPress={ this._onPressNoti }  />

        </BenHeader>


        <Content>
          <View style={{
            alignItems:'center',
            paddingTop:10,
            paddingBottom:20
          }}>

            <View style={{
              width:'95%',
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
                <Box data={{
                  code:'star',
                  name:'Collect Start'
                }} />

                <Box data={{
                  code:'cafe',
                  name:'Orders'
                }} />

                <Box data={{
                  code:'pizza',
                  name:'Coupon'
                }} />


            </View>

                {
                  this.data.map((item)=>{

                    const creatorAvatar = item.creator_avatar === null ? AVATAR_URL : item.creator_avatar ;
                    timeAgo = moment()
                    return(
                      <MyCard key={ item.id }>
                        <CardHeader>
                            <MyAvatar
                                data={{
                                 uri:creatorAvatar,
                                 name:item.creator,
                                 info:moment(item.date_created).fromNow()
                               }}
                            />

                        </CardHeader>

                        <CardImage
                          onPress={()=>{ this._onCardPress(item) }}
                          uri={ item.photo }
                        />

                        <View style={{
                          padding: 10,
                          fontFamily: 'Roboto'
                        }}>
                            <View style={{
                              marginTop: 5,
                              marginBottom: 5
                            }}>
                                <Text style={{fontSize: 16, fontWeight: '500', color: COFFEE_COLOR}}> { item.title } </Text>
                            </View>
                            <View>
                                <Text> { item.short_content.replace(/&nbsp;/g,' ') } </Text>
                            </View>

                        </View>

                        <CardFooter>
                            <TouchableOpacity style={{ flexDirection:'row'}}>
                                 <Icon style={{ fontSize:20}} name="heart" />
                                 <Text> { item.like } </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection:'row'}}>
                                 <Icon style={{ fontSize:20}} name="chatbubbles" />
                                 <Text> { item.comments === null ? 0 : item.comments.length } </Text>
                            </TouchableOpacity>
                        </CardFooter>
                      </MyCard>



                    )
                  })
                }

          </View>


        </Content>
      </Container>

    )
  }
}
