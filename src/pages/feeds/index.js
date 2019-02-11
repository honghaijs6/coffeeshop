import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Icon,  Text, Content } from 'native-base';

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

import store from '../../redux/store';
import { benAuth } from '../../model/authen';

export default class FeedPage extends Component{

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'feed',

      userInfo: store.getState().user.userInfo
    }


    this._setup();

    this._onPressAvarar  = this._onPressAvarar.bind(this);
    this._onPressNoti = this._onPressNoti.bind(this) ;
  }

  _setup(){
    //alert('hello')
    //console.log(this.state.userInfo);
    //this._listenStore();
  }

  /* WHEN*/


  _onPressAvarar(){
    alert('Click avatar ')
  }

  _onPressNoti(){
    alert('click notifications')
  }

  _onCardPress(data){

      this.props.navigation.navigate('FeedView');



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

            <MyCard>
                <CardHeader>
                    <MyAvatar
                        data={{
                         uri:'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/p160x160/41795526_2082548408445932_7771390061051904000_n.jpg?_nc_cat=109&_nc_oc=AQnW3o2N69YmcjDnxCqPK-AYEGDWGy58AdAu6F6mG8LqDBuhXpyRoKX2l_I27tW92Fek7R-R893bbrzdjUPf59qk&_nc_ht=scontent.fsgn5-6.fna&oh=927a69754880b732e2c3ce267d1a0af9&oe=5CFA7E33',
                         name:'Benjamin',
                         info:'5 minuts ago'
                       }}
                    />

                </CardHeader>

                <CardImage
                  onPress={()=>{ this._onCardPress() }}
                  uri="https://i-cdn.embed.ly/1/display?key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Fi.redd.it%2F6oezmf7cw7f11.jpg"
                />

                <CardContent>
                    I have Got a cat, her name is matinda. She is a quite old for a cat
                    She is eleven years olds. matilda is very fluffy, her back is black, and her belly, chest are white
                </CardContent>

                <CardFooter>
                    <TouchableOpacity style={{ flexDirection:'row'}}>
                         <Icon style={{ fontSize:20}} name="heart" />
                         <Text> 18 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection:'row'}}>
                         <Icon style={{ fontSize:20}} name="chatbubbles" />
                         <Text> 115 </Text>
                    </TouchableOpacity>
                </CardFooter>

            </MyCard>

            <MyCard>
                <CardHeader>
                    <MyAvatar
                        data={{
                         uri:'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-1/c261.310.378.378a/s160x160/46401462_1931261700314528_572870838248800256_n.jpg?_nc_cat=110&_nc_oc=AQlKpm8eY9ec2dRT5XFa-cLWV0SlMYeck1odmsj_hN31rokE4WlRSsYGwN89kFynaVkMQFIWhdw3p8ea4qFsUZIp&_nc_ht=scontent.fsgn5-3.fna&oh=2076ac91fef92b60634511aa3e3a4108&oe=5CBB2FB2',
                         name:'Nguyen Van Loc',
                         info:'15 minuts ago'
                       }}
                    />

                </CardHeader>

                <CardImage
                  onPress={()=>{ this._onCardPress() }}
                  uri="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/49128234_331015080960848_5154945226128752640_n.jpg?_nc_cat=102&_nc_oc=AQlShfz3MyrFWXJwNEpfPEzTUXidhO7gd-xk-JqcX_EB08DA73WNb6pvWpYa0N-zeHddynAsPtr3cQ09LySYe4Ut&_nc_ht=scontent.fsgn5-4.fna&oh=35bac5787d8b4a33c2c1fbaa9d0ceac5&oe=5CCCB622"
                />

                <CardContent>
                    The new year stands before us, like a chapter in a book, waiting to be written. We can help write that story by setting goals.
                </CardContent>

                <CardFooter>
                    <TouchableOpacity style={{ flexDirection:'row'}}>
                         <Icon style={{ fontSize:20}} name="heart" />
                         <Text> 18 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection:'row'}}>
                         <Icon style={{ fontSize:20}} name="chatbubbles" />
                         <Text> 115 </Text>
                    </TouchableOpacity>
                </CardFooter>

            </MyCard>


          </View>


        </Content>
      </Container>

    )
  }
}
