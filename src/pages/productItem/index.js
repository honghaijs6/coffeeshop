/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { Container,  Content, Icon } from 'native-base';
import { GREY_COLOR, COFFEE_COLOR, RED_COLOR } from '../../config/const' ;

import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton';
import LikeButton from '../../components/LikeButton';

import BodyItem from './body';


export default class ProductItem extends Component {

  constructor(props){
    super(props)

    this.state = {

      typeAction:'',
      onAction:'',
      tab:'productitem',


    }
  }

  render() {
    return (
      <Container style={{
        backgroundColor:GREY_COLOR,
        display:  this.props.onTab === this.state.tab ? 'block':'none'
      }}>

        <BenHeader>
          <BackButton />

          <LikeButton />

        </BenHeader>

        <View style={{
          flex:1,
          justifyContent: 'space-between'
        }}>

            <Content>
                <BodyItem />

            </Content>


            {/* FOOTER */}
            <View style={s.footerBar}>

              {/* LFET SIDE */}
              <View>
                  <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10
                  }}>
                      <TouchableOpacity style={{
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 32, width: 32,
                        borderWidth: 0.5,
                        borderColor: RED_COLOR

                      }}>
                        <Icon style={{color: RED_COLOR}} name="remove" />

                      </TouchableOpacity>

                      <View style={{ justifyContent: 'center',
                      alignItems: 'center',height: 32, width: 41, }}>
                        <Text> 1 </Text>
                      </View>

                      <TouchableOpacity style={{
                        borderRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 32, width: 32,
                        borderWidth: 0.5,
                        borderColor:COFFEE_COLOR,
                        backgroundColor: COFFEE_COLOR

                      }}>
                        <Icon style={{color: '#fff'}} name="add" />
                      </TouchableOpacity>

                  </View>
              </View>

              <View>
                  <TouchableOpacity style={{

                    marginHorizontal: 10,
                    width: 140,
                    height: 36,
                    borderRadius: 6,
                    borderColor: 'rgba(0,0,0,0.2)',
                    justifyContent: 'center',
                    backgroundColor: COFFEE_COLOR,
                    alignItems: 'center'
                  }} >
                    <Text style={{ color:'#fff', fontFamily: 'Roboto', fontSize: 14}}> $ 11 </Text>
                  </TouchableOpacity>
              </View>
            </View>

        </View>


      </Container>
    );
  }
}

const s = StyleSheet.create({
  footerBar:{
    height: 55,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff'
  },
  txt:{
    fontFamily: 'Roboto',
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: COFFEE_COLOR
  },
});
