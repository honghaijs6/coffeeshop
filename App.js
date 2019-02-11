import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { Font, AppLoading } from 'expo';


import { createStackNavigator, createAppContainer } from "react-navigation";

<<<<<<< HEAD
// test lan II nha cac ban hahah
=======
// test  edit from github
>>>>>>> 5de0225cf631bdeda794c80b4491b7ac5dbd4c17
import store from './src/redux/store';


import Login from './src/pages/login';
import Register from './src/pages/register';
import Shop from './src/pages/shop';


import { benAuth } from './src/model/authen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => { this.props.navigation.push('Details') } }
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: Login,
    Register: Register
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {

        isReady:false,
        login: store.getState().user.isLoggedIn || false  ,
        onAction:''
    }


  }


  _listenStore(){

    this.unsubscribe = store.subscribe(()=>{

        this.setState({
          login: store.getState().user.isLoggedIn || false
        })

    })

  }

  componentWillUnmount(){

      this.unsubscribe();
  }

  componentDidMount(){
    this._listenStore();
  }
  componentWillMount(){
    this.loadFonts();
  }


  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });



    this.setState({ isReady: true });
  }

  componentDidMount(){

    //

    benAuth.checkLoginStatus((exists,isLoggedIn)=>{

      isLoggedIn ? this.setState({login:true}) : null ;


    })
  }

  render() {

    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (

      <AppContainer />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
