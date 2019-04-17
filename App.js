import USER from './src/config/user';
import store from './src/redux/store';
import socket from './src/config/socket';


import { Provider } from 'react-redux';

import React from 'react';
import { AppState } from 'react-native';

import { Font, AppLoading } from 'expo';


import { createStackNavigator, createAppContainer } from "react-navigation";


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
import CollectStarPage from './src/pages/collectStarPage';
import CouponPage from './src/pages/couponPage';
import Scanner from './src/pages/scanner';


/*AccountTab Link*/
import RewardPage from './src/pages/rewardPage';
import HistoryPage from './src/pages/historyPage';
import HistoryPageView from './src/pages/historyView';

import HelpPage from './src/pages/helpPage';
import GuidePage from './src/pages/guidePage';
import EditProfilePage from './src/pages/editProfilePage';
import ChangePassPage from './src/pages/changePassPage';


import SettingDeliveryPage from './src/pages/settingDeliveryPage';
import MapPage from './src/pages/mapPage';



const RootStack = createStackNavigator(
  {
    Home: Shop,
    FeedView:FeedView,


    MenuPage:MenuPage,
    ProItem:ProItemPage,
    CartPage:CartPage,
    CheckOutPage:CheckOutPage,
    DeliveryPage:DeliveryPage,
    CollectStarPage:CollectStarPage,
    CouponPage:CouponPage,
    Scanner:Scanner,

    RewardPage:RewardPage,
    HistoryPage:HistoryPage,
    HistoryPageView:HistoryPageView,
    HelpPage:HelpPage,
    GuidePage:GuidePage,
    SettingDeliveryPage:SettingDeliveryPage,
    MapPage:MapPage,
    EditProfilePage:EditProfilePage,
    ChangePassPage:ChangePassPage

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
        onAction:'',
        socketRes:null
    }

    this._listenSocket();



  }

  _listenSocket(){

    // FEEDS
    socket.on('feeds created',(res)=>{

      store.dispatch({
        type:'reset-socket',
        res:res
      });

    });
  
    socket.on('feeds updated',(res)=>{

      console.log('socket init')
      store.dispatch({
        type:'reset-socket',
        res:res
      });

    });


    // ORDERS
    socket.on('orders created',(res)=>{
      store.dispatch({
        type:'reset-socket',
        res:res
      });
    });

    socket.on('orders updated',(res)=>{

      store.dispatch({
        type:'reset-socket',
        res:res
      });

    });

  }


  _listenStore(){

    this.unsubscribe = store.subscribe(()=>{

        const userInfo = store.getState().user;

        if(userInfo.isLoggedIn !== this.state.login){

          if(userInfo.userInfo !==null){
            this.setState({
              login: userInfo.isLoggedIn
            });
          }

        }

    })

  }

  componentWillUnmount(){

    this.unsubscribe();
  }

  async componentWillMount(){
    await this.loadFonts();

  }


  async loadFonts() {

    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      FontAwesome: require("@expo/vector-icons/fonts/FontAwesome.ttf"),


    });



    this.setState({ isReady: true });
  }

  async componentDidMount(){

    // APP STATE CHANGE
    AppState.addEventListener('change', this._handleAppStateChange);

    this._listenStore();
    await  USER.checkLoginStatus() ;



  }

  _handleAppStateChange(newState){

    store.dispatch({
      type:'appstate-change',
      appState:newState
    });

  }

  render() {

    const AppContainer = createAppContainer(this.state.login ? RootStack : LoginStack );


    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        {/*<AppContainer screenProps={ store } /> */}
        <AppContainer />

      </Provider>

    );
  }
}
