/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default class CardImage extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Image source={{uri: this.props.uri}}
        style={{height: 200, width: null, flex: 1}}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
