import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default function(){

  return(
    <View style={{
      height:Constants.statusBarHeight
    }}></View>
  )
}
