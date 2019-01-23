import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import * as Expo from 'expo';


import Login from './src/pages/login';
import Register from './src/pages/register';
import Shop from './src/pages/shop';



export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
        isReady:false
    }
  }

  componentWillMount(){
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <NativeRouter>
        <View style={styles.container}>

          <Route exact path="/" component={Shop} />


        </View>

      </NativeRouter>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
