/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {  Icon, Tab, Tabs,TabHeading, Content } from 'native-base';

import BodyDrinks from './drinks';
import BodyFoods from './foods';
import BodyFavories from './favories';


const MenuBody = (props) => (


    <Tabs>
        <Tab heading="Drinks">
            <BodyDrinks loader={props.loader} onPressItem={(data)=>{ props.onPressItem(data) }} data={ props.data } />
        </Tab>
        <Tab heading="Foods">
            <BodyFoods/>
        </Tab>
        <Tab heading="Favories">
            <BodyFavories/>
        </Tab>
    </Tabs>


);

export default MenuBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
