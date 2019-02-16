import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Font, AppLoading } from 'expo';


import { createStackNavigator, createAppContainer } from "react-navigation";


import store from './src/redux/store';

/* main pages*/
import Login from './src/pages/login';
import Register from './src/pages/register';
import Shop from './src/pages/shop';

/* sub pages */

/* FeedTab Link */
import FeedView from './src/pages/feedview';


/*MissionTab Link*/

/* storeTab Link*/

/*  OrderTabs linkin */
import DeliveryPage from './src/pages/delivery';
import MenuPage from './src/pages/menu';
import ProItemPage from './src/pages/productItem';
import CartPage from './src/pages/cart' ;
import CheckOutPage from './src/pages/checkout';

/*AccountTab Link*/
import RewardPage from './src/pages/rewardPage';
import HistoryPage from './src/pages/historyPage';
import HelpPage from './src/pages/helpPage';
import SettingDeliveryPage from './src/pages/settingDeliveryPage';
import MapPage from './src/pages/mapPage';



import { benAuth } from './src/model/authen';

const RootStack = createStackNavigator(
  {
    Home: Shop,
    FeedView:FeedView,

    /* TAB ORDERS CHILD */
    MenuPage:MenuPage,
    ProItem:ProItemPage,
    CartPage:CartPage,
    CheckOutPage:CheckOutPage,
    DeliveryPage:DeliveryPage,

    /* TAB ACCOUNT CHILD */
    RewardPage:RewardPage,
    HistoryPage:HistoryPage,
    HelpPage:HelpPage,
    SettingDeliveryPage:SettingDeliveryPage,
    MapPage:MapPage

  },
  {
    initialRouteName: "RewardPage",
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

    this._listenStore();


  }


  _listenStore(){

    this.unsubscribe = store.subscribe(()=>{

        const userInfo = store.getState().user;
        if(userInfo.isLoggedIn !== this.state.login){
          this.setState({
            login: userInfo.isLoggedIn
          });
        }

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

      <AppContainer screenProps={ store } />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
