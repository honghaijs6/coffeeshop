/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import BenHeader from '../../components/BenHeader';
import BackButton from '../../components/BackButton'


const MyComponent = (props) => (
  <BenHeader type="single">

      <BackButton onPress={ props.onBackBtnPress } />

      <TextInput style={{
        borderWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.2)',
        width: '86%',
        height: 36,
        paddingHorizontal: 10,
        borderRadius: 20
      }} placeholder="Search" />

  </BenHeader>
);

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
