import React, { Component } from 'react';

// Lib
import BenTabs  from "../components/BenTabs";
import BenStatusBar  from "../components/BenStatusBar";

import FeedPage from './feeds/';
import FeedViewPage from './feedview';

import OrderPage from './orders';
import MenuPage from './menu';
import ProductItemPage from './productItem';
import CartPage from './cart';

import DeliveryPage from './delivery';
import CheckOutPage from './checkout';




import MissionPage from './missions/';
import StorePage from './stores/';

import AccountPage from './users/';


import store from '../redux/store';


class shop extends Component {

    constructor(){
      super();

      this.state = state = {
        tabs:[
          { tab:'feed',icon:'paper',name:'Feeds' },
          { tab:'mission',icon:'aperture',name:'Missions' },

          { tab:'order',icon:'cafe',name:'Orders' },


          { tab:'store',icon:'pin',name:'Stores' },
          { tab:'account',icon:'person',name:'Account' },
        ],
        onTab:'feed',
        tab:{},

        shopingCart:[],

        userInfo:store.getState().user.userInfo
      }

      this._setup();

    }


    _setup(){

      this._listenStore();
    }

    _listenStore(){

      this.unsubscribe = store.subscribe(()=>{


          this.setState({
            userInfo: store.getState().user.userInfo
          })

      })

    }

    componentWillUnmount(){

        this.unsubscribe();
    }



    _onChangeTab(data){
      this.setState({
        onTab:data.tab,
        tab:data
      })
    }

    onStateChange(newState){

       switch (newState.onAction) {
         case 'change_tab' :


            let combineState = Object.assign(this.state,newState);
            combineState.onTab = newState.toTab

            this.setState( combineState );

         break;
         default:

       }

    }
    render() {


        return (
            <BenTabs
              onPress={(data)=>{ this._onChangeTab(data) }}
              onTab={ this.state.onTab }
              data={ this.state.tabs }
            >

              <BenStatusBar/>

              <FeedPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <FeedViewPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  {...this.state} />

              <OrderPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <MenuPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state } />
              <ProductItemPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />
              <CartPage onStateChange={ (newState)=>{ this.onStateChange(newState) } } { ...this.state }  />
              <DeliveryPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  { ...this.state }  />

              <CheckOutPage onStateChange={ (newState)=>{ this.onStateChange(newState) } }  { ...this.state } />







              <MissionPage { ...this.state } />
              <StorePage { ...this.state } />
              <AccountPage { ...this.state } />




            </BenTabs>
        );
    }
}
export default shop;
