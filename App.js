import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import * as Expo from 'expo';

import store from './src/redux/store';


import Login from './src/pages/login';
import Register from './src/pages/register';
import Shop from './src/pages/shop';


import { benAuth } from './src/model/authen';




export default class App extends React.Component {

  constructor(){
    super();

    this.state = {

        isReady:false,
        login: store.getState().user.isLoggedIn || false  ,
        onAction:''
    }


    this._setup();
  }

  _setup(){

    this._listenStore();
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

  componentDidMount(){

    //

    benAuth.checkLoginStatus((exists,isLoggedIn)=>{

      isLoggedIn ? this.setState({login:true}) : null ;


    })
  }

  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <NativeRouter>


          {
             this.state.login ? (<Route path="/" name="Home" component={Shop} />) : (
               <View style={styles.container}>
                  <Route exact path="/" name="Login Page" component={Login} />
                  <Route exact path="/register" name="Login Page" component={Register} />

               </View>
             )
          }




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
