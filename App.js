import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font, AppLoading } from 'expo';


import { createStackNavigator, createAppContainer } from "react-navigation";


import store from './src/redux/store';


import Login from './src/pages/login';
import Register from './src/pages/register';
import Shop from './src/pages/shop';

import FeedView from './src/pages/feedview';
import MenuPage from './src/pages/menu';

import ProItem from './src/pages/productItem';





import { benAuth } from './src/model/authen';

const RootStack = createStackNavigator(
  {
    Home: Shop,
    FeedView:FeedView,
    MenuPage:MenuPage,
    ProItem:ProItem



  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);

const LoginStack = createStackNavigator(
  {
    Home: Login,
    Register: Register,

  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
);



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
        });



    })

  }

  componentWillUnmount(){
    this.unsubscribe();
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

    this._listenStore();

    benAuth.checkLoginStatus((exists,isLoggedIn)=>{

      isLoggedIn ? this.setState({login:true}) : null ;


    })
  }

  render() {

    const AppContainer = createAppContainer(this.state.login ? RootStack : LoginStack );


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
